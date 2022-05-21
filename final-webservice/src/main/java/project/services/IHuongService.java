package project.services;

import project.models.Huong;

import java.util.List;

public interface IHuongService {
    List<Huong> findAll();

    Huong findById(int id);
}
