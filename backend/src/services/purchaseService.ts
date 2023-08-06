import { PurchaseRequest } from "../dtos/purchaseDtos";
import { PurchaseCreationDTO, PaymentRequest } from "../dtos/purchaseDtos";
import productRepository from "../repositories/productRepository";
import clienteRepository from "../repositories/clienteRepository";
import purchaseRepository from "../repositories/purchaseRepository";

async function insert(data: PurchaseRequest[], id:number) {

  const clientData:PurchaseCreationDTO = {
    clientId:id
  };

  await purchaseRepository.insert(clientData);

  for(const product of data) {
    const productId = (await productRepository.getByName(product.name)).id;
    const purchaseId = (await purchaseRepository.getPurchaseByClientId(id)).id;

    const registerData = {
      productId,
      purchaseId,
      price: Number(product.price),
      quantity: Number(product.quantity)
    }

    await purchaseRepository.registerBoughtProduct(registerData);
  }
};

async function getPurchases(id:number) {
  return await purchaseRepository.getPurchasesByClientId(id);
};

async function getPurchasesByDate(id:number, initial:string, final:string) {

  const initialDate = new Date(formatStringData(initial));
  const finalDate = new Date(formatStringData(final));

  return await purchaseRepository.getClientPurchasesByDate(id, initialDate, finalDate);
};

async function getPurchaseInfo(id:number) {
  const purchase = await purchaseRepository.getPurchaseById(id);
  const cliente = await clienteRepository.clientById(purchase.clientId);
  const purchases = await purchaseRepository.getClientPurchases(id);

  const data = {
    fornecedor: cliente.name,
    data: purchase.createdAt,
    formas: purchase.forma,
    detalhes: purchase.detalhe,
    valores: purchase.valor,
    wasPaid: purchase.wasPaid,
    produtos: purchases
  }

  return data;
};

async function payment(data:PaymentRequest, id:number) {
  const purchase = await purchaseRepository.getPurchaseById(id);

  const info = await getPurchaseInfo(id);

  if((calculateTotal(info) - Number(data.valor)) === 0) {
    purchase.wasPaid = true;
  }

  purchase.forma.push(data.forma);
  purchase.detalhe.push(data.detalhe);
  purchase.valor.push(Number(data.valor));

  await purchaseRepository.addPayment(purchase);
};

async function getTransactions(id:number, initial:string, final:string) {
  const initialDate = new Date(formatStringData(initial));
  const finalDate = new Date(formatStringData(final));

  const data = {};

  const purchases:any = await purchaseRepository.getClientPurchasesByDate(id, initialDate, finalDate);

  for(const purchase of purchases) {
    const info =  await purchaseRepository.getClientPurchases(purchase.id);
    purchase.product = info;
  }

  for(const purchase of purchases) {
    for(let i = 0; i < purchase.product.length;i++) {
      if(data[purchase.product[i].produto.nome + " " + purchase.product[i].produto.medida]) {
        data[purchase.product[i].produto.nome + " " + purchase.product[i].produto.medida] += purchase.product[i].quantity
      } else {
        data[purchase.product[i].produto.nome + " " + purchase.product[i].produto.medida] = purchase.product[i].quantity
      }
    }
  }

  return getSortedHash(data);
}

async function getStockInfo(initial:string, final:string) {
  const initialDate = new Date(formatStringData(initial));
  const finalDate = new Date(formatStringData(final));

  const data = {};

  const clientes = await clienteRepository.getClients();

  for(const cliente of clientes) {
    const purchases:any = await purchaseRepository.getClientPurchasesByDate(cliente.id, initialDate, finalDate);

    for(const purchase of purchases) {
      const info =  await purchaseRepository.getClientPurchases(purchase.id);
      purchase.product = info;
    }
  
    for(const purchase of purchases) {
      for(let i = 0; i < purchase.product.length;i++) {
        if(data[purchase.product[i].produto.nome + " " + purchase.product[i].produto.medida]) {
          data[purchase.product[i].produto.nome + " " + purchase.product[i].produto.medida] += purchase.product[i].quantity
        } else {
          data[purchase.product[i].produto.nome + " " + purchase.product[i].produto.medida] = purchase.product[i].quantity
        }
      }
    }
  }
 
  return getSortedHash(data);
}

async function remove(id:number) {
  await purchaseRepository.removePurchase(id);
}

const purchaseServices = {
  insert,
  remove,
  getPurchaseInfo,
  getPurchases,
  getPurchasesByDate,
  getTransactions,
  payment,
  getStockInfo
};

function calculateTotal(purchases:any) {
  let soma = 0;
  let soma2 = 0;

  if(purchases.valores.length === 0) {
    soma2 = 0;
  }else {
    purchases.valores.map(value => {
      soma2 += value;
    })
  }

  purchases.produtos.map(e => {
    soma += e.price * e.quantity;
  });

  return soma - soma2;
}

function formatStringData(data:string) {
  var dia  = data.split("/")[0];
  var mes  = data.split("/")[1];
  var ano  = data.split("/")[2];

  return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
}

function getSortedHash(inputHash){
  var resultHash = {};

  var keys = Object.keys(inputHash);
  keys.sort(function(a, b) {
    return inputHash[a] - inputHash[b]
  }).reverse().forEach(function(k) {
    resultHash[k] = inputHash[k];
  });
  return resultHash;
}

export default purchaseServices;