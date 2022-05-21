package project.dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import project.models.DanhMuc;
import project.models.Huong;
import project.models.VungMien;


public class BaiDangDto implements Validator {
    int id;

    String tieuDe;

    DanhMuc danhMuc;

    VungMien vungMien;

    int banLa;

    Huong huong;

    int tinhTrang;

    String diaChi;

    double dienTich;

    double gia;

    String noiDung;

    String hinhAnh;

    public BaiDangDto() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTieuDe() {
        return tieuDe;
    }

    public void setTieuDe(String tieuDe) {
        this.tieuDe = tieuDe;
    }

    public DanhMuc getDanhMuc() {
        return danhMuc;
    }

    public void setDanhMuc(DanhMuc danhMuc) {
        this.danhMuc = danhMuc;
    }

    public VungMien getVungMien() {
        return vungMien;
    }

    public void setVungMien(VungMien vungMien) {
        this.vungMien = vungMien;
    }

    public int getBanLa() {
        return banLa;
    }

    public void setBanLa(int banLa) {
        this.banLa = banLa;
    }

    public Huong getHuong() {
        return huong;
    }

    public void setHuong(Huong huong) {
        this.huong = huong;
    }

    public int getTinhTrang() {
        return tinhTrang;
    }

    public void setTinhTrang(int tinhTrang) {
        this.tinhTrang = tinhTrang;
    }

    public String getDiaChi() {
        return diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public double getDienTich() {
        return dienTich;
    }

    public void setDienTich(double dienTich) {
        this.dienTich = dienTich;
    }

    public double getGia() {
        return gia;
    }

    public void setGia(double gia) {
        this.gia = gia;
    }

    public String getNoiDung() {
        return noiDung;
    }

    public void setNoiDung(String noiDung) {
        this.noiDung = noiDung;
    }

    public String getHinhAnh() {
        return hinhAnh;
    }

    public void setHinhAnh(String hinhAnh) {
        this.hinhAnh = hinhAnh;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
