package project.services;

import org.springframework.beans.factory.annotation.Autowired;
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
}
