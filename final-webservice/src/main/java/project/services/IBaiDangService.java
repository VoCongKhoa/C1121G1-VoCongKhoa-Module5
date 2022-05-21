package project.services;

import project.models.BaiDang;

import java.util.List;

public interface IBaiDangService {
    List<BaiDang> findAll();

    void save(BaiDang baiDang);
}
