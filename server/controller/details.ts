import { Request, Response } from "express";
import { FilterOptions, GetAdmin } from "../model/coin";
import { getDataFromData } from "../util/apiUtils";
/*import * as adminData from "../database/coins";*/


// 받아온 getData 값으로 코인여부 리턴
export async function getCoins(req: Request, res: Response) {
  const newAdminInfo: FilterOptions = req.body;
  /*
  const insertId = await adminData.createAdmin(newAdminInfo);*/
  res.status(201).json();
}

//모든 getData 값으로 코인여부 리턴
export async function getCoinsAll(req: Request, res: Response) {
    const URL = "https://api.binance.com/api/v3/ticker/price"
    const data = await getDataFromData(URL);
    res.send(data);
}