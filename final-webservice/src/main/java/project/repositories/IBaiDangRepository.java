package project.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import project.models.BaiDang;

public interface IBaiDangRepository extends JpaRepository<BaiDang,Integer> {

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong ")
    Page<BaiDang> getAllBaiDangPagingAndSearch(Pageable pageable,
                                               @Param("dienTich") String dienTich,
                                               @Param("gia") String gia,
                                               @Param("huong") String huong);

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia ")
    Page<BaiDang> getAllBaiDangPagingAndDienTichSearchAndGiaSearch(Pageable pageable,
                                                                   @Param("dienTich") String dienTich,
                                                                   @Param("gia") String gia);
}
