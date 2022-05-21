import {DanhMuc} from "./danhMuc";
import {VungMien} from "./vungMien";
import {Huong} from "./huong";

export interface BaiDang {
  id: number,
  tieuDe: string,
  danhMuc: DanhMuc,
  vungMien: VungMien,
  banLa: number,
  huong: Huong,
  tinhTrang: number,
  diaChi: string,
  dienTich: number,
  gia: number,
  noiDung: string,
  hinhAnh: string
}
