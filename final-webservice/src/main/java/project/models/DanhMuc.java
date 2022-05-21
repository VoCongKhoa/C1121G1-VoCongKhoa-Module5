package project.models;

import javax.persistence.*;
import java.util.Set;

@Entity
public class DanhMuc {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    int id;

    @Column(name = "ten")
    String ten;

    @OneToMany(mappedBy = "danhMuc")
    Set<BaiDang> baiDangSet;

    public DanhMuc() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public Set<BaiDang> getBaiDangSet() {
        return baiDangSet;
    }

    public void setBaiDangSet(Set<BaiDang> baiDangSet) {
        this.baiDangSet = baiDangSet;
    }
}
