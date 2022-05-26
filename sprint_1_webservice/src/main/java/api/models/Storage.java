package api.models;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "storage")
public class Storage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "created_date", length = 50)
    private String createdDate;
    @Column(name = "quantity", nullable = false)
    private Long quantity;
    @Column(name = "status", nullable = false)
    private boolean status;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false, referencedColumnName = "id")
    private Employee createdEmployee;

    @OneToMany(mappedBy = "storage")
    private Set<StorageProduct> storageProductSet;

    @Column(name = "delete_flag", nullable = false)
    private boolean deleteFlag;

}
