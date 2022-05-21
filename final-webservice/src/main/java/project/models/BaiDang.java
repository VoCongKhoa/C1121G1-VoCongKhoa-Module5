package project.models;

import javax.persistence.*;

@Entity
public class BaiDang {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    int id;

    @Column(name = "tieu_de")
    String tieuDe;

    @ManyToOne
    @JoinColumn(name = "danh_muc_id", referencedColumnName = "id")
    DanhMuc danhMuc;

    @ManyToOne
    @JoinColumn(name = "vung_mien_id", referencedColumnName = "id")
    VungMien vungMien;

    @Column(name = "ban_la")
    int banLa;

    @ManyToOne
    @JoinColumn(name = "huong_id", referencedColumnName = "id")
    Huong huong;

    @Column(name = "tinh_trang")
    int tinhTrang;

    @Column(name = "dia_chi")
    String diaChi;

    @Column(name = "dien_tich")
    double dienTich;

    @Column(name = "gia")
    double gia;

    @Column(name = "noi_dung")
    String noiDung;

    @Column(name = "hinh_anh")
    String hinhAnh;

    public BaiDang() {
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
}
