package project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.models.VungMien;
import project.repositories.IVungMienRepository;

import java.util.List;

@Service
public class VungMienServiceImpl implements IVungMienService{
    @Autowired
    IVungMienRepository iVungMienRepository;

    @Override
    public List<VungMien> findAll() {
        return iVungMienRepository.findAll();
    }
}
