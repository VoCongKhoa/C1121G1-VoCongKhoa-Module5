package project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import project.models.BaiDang;
import project.repositories.IBaiDangRepository;

import java.util.List;

@Service
public class BaiDangServiceImpl implements IBaiDangService{
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
        if (huong.equals("")){
            System.out.println("a");
            return iBaiDangRepository.getAllBaiDangPagingAndDienTichSearchAndGiaSearch(pageable, dienTich, gia);
        } else {
            System.out.println("b");
            return iBaiDangRepository.getAllBaiDangPagingAndSearch(pageable, dienTich, gia, huong);
        }
    }
}
