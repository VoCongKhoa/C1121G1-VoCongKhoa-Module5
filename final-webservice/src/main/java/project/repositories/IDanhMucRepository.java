package project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.models.DanhMuc;

public interface IDanhMucRepository extends JpaRepository<DanhMuc, Integer> {
}
