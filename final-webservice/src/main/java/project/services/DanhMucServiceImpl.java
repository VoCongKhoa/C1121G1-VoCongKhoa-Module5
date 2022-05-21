package project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.models.DanhMuc;
import project.repositories.IDanhMucRepository;

import java.util.List;

@Service
public class DanhMucServiceImpl implements IDanhMucService{

    @Autowired
    IDanhMucRepository iDanhMucRepository;

    @Override
    public List<DanhMuc> findAll() {
        return iDanhMucRepository.findAll();
    }

    @Override
    public DanhMuc findById(int id) {
        return iDanhMucRepository.findById(id).orElse(null);
    }
}
