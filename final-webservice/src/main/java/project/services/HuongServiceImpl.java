package project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.models.Huong;
import project.repositories.IHuongRepository;

import java.util.List;

@Service
public class HuongServiceImpl implements IHuongService{
    @Autowired
    IHuongRepository iHuongRepository;

    @Override
    public List<Huong> findAll() {
        return iHuongRepository.findAll();
    }
}
