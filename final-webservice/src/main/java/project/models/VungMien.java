package project.models;

import javax.persistence.*;
import java.util.Set;

@Entity
public class VungMien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    int id;

    @Column(name = "ten")
    String ten;

    @OneToMany(mappedBy = "vungMien")
    Set<BaiDang> baiDangSet;

    public VungMien() {
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
