package project.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import project.models.BaiDang;

import java.util.List;

public interface IBaiDangService {
    List<BaiDang> findAll();

    void save(BaiDang baiDang);

    BaiDang findById(int id);

    void deleteById(int id);

    Page<BaiDang> getAllBaiDangPaging(Pageable pageable);

    Page<BaiDang> getAllBaiDangPagingAndSearch(Pageable pageable, String dienTich, String gia, String huong);
}
