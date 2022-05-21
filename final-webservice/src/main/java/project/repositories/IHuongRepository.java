package project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.models.Huong;

public interface IHuongRepository extends JpaRepository<Huong, Integer> {
}
