package project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.models.BaiDang;

public interface IBaiDangRepository extends JpaRepository<BaiDang,Integer> {
}
