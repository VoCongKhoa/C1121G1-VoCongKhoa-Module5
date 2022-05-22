package project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project.models.BaiDang;
import project.repositories.IBaiDangRepository;

import java.util.List;

@Service
public class BaiDangServiceImpl implements IBaiDangService {
    @Autowired
    IBaiDangRepository iBaiDangRepository;

    @Override
    public List<BaiDang> findAll() {
        return iBaiDangRepository.findAll();
    }

    @Override
    public void save(BaiDang baiDang) {
        iBaiDangRepository.save(baiDang);
    }

    @Override
    public BaiDang findById(int id) {
        return iBaiDangRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(int id) {
        iBaiDangRepository.deleteById(id);
    }

    @Override
    public Page<BaiDang> getAllBaiDangPaging(Pageable pageable) {
        return iBaiDangRepository.findAll(pageable);
    }

    @Override
    public Page<BaiDang> getAllBaiDangPagingAndSearch(Pageable pageable, String dienTich, String gia, String huong) {
        if (huong.equals("")) {
            return iBaiDangRepository.getAllBaiDangPagingAndDienTichSearchAndGiaSearch(pageable, dienTich, gia);
        } else {
            return iBaiDangRepository.getAllBaiDangPagingAndSearch(pageable, dienTich, gia, huong);
        }
    }

    @Override
    public Page<BaiDang> getAllBaiDangPagingAndSearchAndSort(Pageable pageable, String dienTich, String gia, String huong, String sort) {
        switch (sort){
            case "dt":
                if (huong.equals("")) {
                    return iBaiDangRepository.getAllBaiDangPagingAndDienTichSearchAndGiaSearchAndDienTichSort(pageable, dienTich, gia);
                } else {
                    return iBaiDangRepository.getAllBaiDangPagingAndSearchAndDienTichSort(pageable, dienTich, gia, huong);
                }
            case "g":
                if (huong.equals("")) {
                    return iBaiDangRepository.getAllBaiDangPagingAndDienTichSearchAndGiaSearchAndGiaSort(pageable, dienTich, gia);
                } else {
                    return iBaiDangRepository.getAllBaiDangPagingAndSearchAndGiaSort(pageable, dienTich, gia, huong);
                }
            case "vm":
                if (huong.equals("")) {
                    return iBaiDangRepository.getAllBaiDangPagingAndDienTichSearchAndGiaSearchAndVungMienSort(pageable, dienTich, gia);
                } else {
                    return iBaiDangRepository.getAllBaiDangPagingAndSearchAndVungMienSort(pageable, dienTich, gia, huong);
                }
            case "h":
                if (huong.equals("")) {
                    return iBaiDangRepository.getAllBaiDangPagingAndDienTichSearchAndGiaSearchAndHuongSort(pageable, dienTich, gia);
                } else {
                    return iBaiDangRepository.getAllBaiDangPagingAndSearchAndHuongSort(pageable, dienTich, gia, huong);
                }
            case "dm":
                if (huong.equals("")) {
                    return iBaiDangRepository.getAllBaiDangPagingAndDienTichSearchAndGiaSearchAndDanhMucSort(pageable, dienTich, gia);
                } else {
                    return iBaiDangRepository.getAllBaiDangPagingAndSearchAndDanhMucSort(pageable, dienTich, gia, huong);
                }
            default:
                if (huong.equals("")) {
                    return iBaiDangRepository.getAllBaiDangPagingAndDienTichSearchAndGiaSearchAndIdSort(pageable, dienTich, gia);
                } else {
                    return iBaiDangRepository.getAllBaiDangPagingAndSearchAndIdSort(pageable, dienTich, gia, huong);
                }
        }
    }
}
