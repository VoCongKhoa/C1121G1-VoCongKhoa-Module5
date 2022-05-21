package project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.models.VungMien;

public interface IVungMienRepository extends JpaRepository<VungMien,Integer> {
}
