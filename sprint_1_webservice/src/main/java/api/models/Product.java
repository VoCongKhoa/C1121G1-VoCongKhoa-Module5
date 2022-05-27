package api.models;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "price", nullable = false)
    private Double price;
    @Column(name = "image", columnDefinition = "LONGTEXT")
    private String image;
    @Column(name = "qr_scan", columnDefinition = "LONGTEXT")
    private String qrScan;
    @Column(name = "screen_size", length = 50)
    private String screenSize;
    @Column(name = "camera", length = 50)
    private String camera;
    @Column(name = "selfie", length = 50)
    private String selfie;
    @Column(name = "cpu", length = 50)
    private String cpu;
    @Column(name = "memory", length = 50)
    private String memory;

    @ManyToOne
    @JoinColumn(name = "supplier_id", referencedColumnName = "id")
    private Supplier supplier;

    @Column(name = "other_description", columnDefinition = "LONGTEXT")
    private String otherDescription;

//    @OneToMany(mappedBy = "product")
//    private Set<Invoice> invoiceSet;

    @OneToMany(mappedBy = "product")
    private Set<Storage> storageSet;

    @Column(name = "delete_flag", nullable = false)
    private boolean deleteFlag;
}
