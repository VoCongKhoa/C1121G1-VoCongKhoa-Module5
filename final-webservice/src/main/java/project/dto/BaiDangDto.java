package project.dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import project.models.DanhMuc;
import project.models.Huong;
import project.models.VungMien;

import javax.validation.constraints.NotBlank;
import java.util.Objects;


public class BaiDangDto implements Validator {
    int id;

    @NotBlank(message = "Vui long khong de trong")
    String tieuDe;

    int danhMuc;

    int vungMien;

    int banLa;

    int huong;

    int tinhTrang;

    @NotBlank(message = "Vui long khong de trong")
    String diaChi;

    @NotBlank(message = "Vui long khong de trong")
    String dienTich;

    @NotBlank(message = "Vui long khong de trong")
    String gia;

    @NotBlank(message = "Vui long khong de trong")
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

    public int getDanhMuc() {
        return danhMuc;
    }

    public void setDanhMuc(int danhMuc) {
        this.danhMuc = danhMuc;
    }

    public int getVungMien() {
        return vungMien;
    }

    public void setVungMien(int vungMien) {
        this.vungMien = vungMien;
    }

    public int getBanLa() {
        return banLa;
    }

    public void setBanLa(int banLa) {
        this.banLa = banLa;
    }

    public int getHuong() {
        return huong;
    }

    public void setHuong(int huong) {
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

    public String getDienTich() {
        return dienTich;
    }

    public void setDienTich(String dienTich) {
        this.dienTich = dienTich;
    }

    public String getGia() {
        return gia;
    }

    public void setGia(String gia) {
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
        BaiDangDto baiDangDto = (BaiDangDto) target;
        if (!Objects.equals(baiDangDto.getDienTich(), "")){
            if (!baiDangDto.getDienTich().trim().equals("") && !baiDangDto.getDienTich().matches("^\\s*(?=.*[1-9])\\d*(?:\\.\\d{1,4})?\\s*$")){
                errors.rejectValue("dienTich", "", "Dien tich phai la so lon hon 0");
            } else {
                double dt = Double.parseDouble(baiDangDto.getDienTich().trim());
                if (dt <= 20){
                    errors.rejectValue("dienTich", "", "Dien tich phai la so lon hon 20");
                }
            }
        }
        if (!Objects.equals(baiDangDto.getGia(), "")){
            if (!baiDangDto.getGia().trim().equals("") && !baiDangDto.getGia().matches("^\\s*(?=.*[1-9])\\d*(?:\\.\\d{1,4})?\\s*$")){
                errors.rejectValue("gia", "", "Gia tien phai la so lon hon 0");
            } else {
                double g = Double.parseDouble(baiDangDto.getGia().trim());
                if (g <= 100000000){
                    errors.rejectValue("gia", "", "Gia tien phai la so lon hon 100000000");
                }
            }
        }
    }
}
