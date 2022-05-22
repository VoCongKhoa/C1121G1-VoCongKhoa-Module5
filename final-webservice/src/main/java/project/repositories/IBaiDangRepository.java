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

//    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia order by :sort", nativeQuery = true,
//            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia  order by :sort")
//    Page<BaiDang> getAllBaiDangPagingAndDienTichSearchAndGiaSearchAndSort(Pageable pageable,
//                                                                          @Param("dienTich") String dienTich,
//                                                                          @Param("gia") String gia,
//                                                                          @Param("sort") String sort);

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia order by dien_tich ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia  order by dien_tich ")
    Page<BaiDang> getAllBaiDangPagingAndDienTichSearchAndGiaSearchAndDienTichSort(Pageable pageable,
                                                                                  @Param("dienTich") String dienTich,
                                                                                  @Param("gia") String gia);

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong order by dien_tich ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong order by dien_tich ")
    Page<BaiDang> getAllBaiDangPagingAndSearchAndDienTichSort(Pageable pageable,
                                                              @Param("dienTich") String dienTich,
                                                              @Param("gia") String gia,
                                                              @Param("huong") String huong);

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia order by gia ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia  order by gia ")
    Page<BaiDang> getAllBaiDangPagingAndDienTichSearchAndGiaSearchAndGiaSort(Pageable pageable,
                                                                             @Param("dienTich") String dienTich,
                                                                             @Param("gia") String gia);

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong order by gia ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong order by gia ")
    Page<BaiDang> getAllBaiDangPagingAndSearchAndGiaSort(Pageable pageable,
                                                              @Param("dienTich") String dienTich,
                                                              @Param("gia") String gia,
                                                              @Param("huong") String huong);

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia order by vung_mien ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia  order by vung_mien ")
    Page<BaiDang> getAllBaiDangPagingAndDienTichSearchAndGiaSearchAndVungMienSort(Pageable pageable,
                                                                             @Param("dienTich") String dienTich,
                                                                             @Param("gia") String gia);

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong order by vung_mien ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong order by vung_mien ")
    Page<BaiDang> getAllBaiDangPagingAndSearchAndVungMienSort(Pageable pageable,
                                                         @Param("dienTich") String dienTich,
                                                         @Param("gia") String gia,
                                                         @Param("huong") String huong);

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia order by huong ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia  order by huong ")
    Page<BaiDang> getAllBaiDangPagingAndDienTichSearchAndGiaSearchAndHuongSort(Pageable pageable,
                                                                                  @Param("dienTich") String dienTich,
                                                                                  @Param("gia") String gia);

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong order by huong ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong order by huong ")
    Page<BaiDang> getAllBaiDangPagingAndSearchAndHuongSort(Pageable pageable,
                                                              @Param("dienTich") String dienTich,
                                                              @Param("gia") String gia,
                                                              @Param("huong") String huong);

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia order by danh_muc ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia  order by danh_muc ")
    Page<BaiDang> getAllBaiDangPagingAndDienTichSearchAndGiaSearchAndDanhMucSort(Pageable pageable,
                                                                               @Param("dienTich") String dienTich,
                                                                               @Param("gia") String gia);

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong order by danh_muc ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong order by danh_muc ")
    Page<BaiDang> getAllBaiDangPagingAndSearchAndDanhMucSort(Pageable pageable,
                                                           @Param("dienTich") String dienTich,
                                                           @Param("gia") String gia,
                                                           @Param("huong") String huong);

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia order by id ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia  order by id ")
    Page<BaiDang> getAllBaiDangPagingAndDienTichSearchAndGiaSearchAndIdSort(Pageable pageable,
                                                                                 @Param("dienTich") String dienTich,
                                                                                 @Param("gia") String gia);

    @Query(value = "select * from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong order by id ", nativeQuery = true,
            countQuery = "select count(*) from bai_dang where dien_tich >= :dienTich and gia > :gia and huong_id = :huong order by id ")
    Page<BaiDang> getAllBaiDangPagingAndSearchAndIdSort(Pageable pageable,
                                                             @Param("dienTich") String dienTich,
                                                             @Param("gia") String gia,
                                                             @Param("huong") String huong);
}
