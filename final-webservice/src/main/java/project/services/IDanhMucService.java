package project.services;

import project.models.DanhMuc;

import java.util.List;

public interface IDanhMucService {
    List<DanhMuc> findAll();

    DanhMuc findById(int id);
}
