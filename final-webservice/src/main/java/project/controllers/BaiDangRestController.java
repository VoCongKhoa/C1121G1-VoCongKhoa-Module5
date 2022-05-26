package project.controllers;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import project.dto.BaiDangDto;
import project.models.*;
import project.services.IBaiDangService;
import project.services.IDanhMucService;
import project.services.IHuongService;
import project.services.IVungMienService;

import javax.validation.Valid;
import java.util.*;

@RestController
@CrossOrigin("*")
public class BaiDangRestController {

    @Autowired
    IDanhMucService iDanhMucService;
    @Autowired
    IHuongService iHuongService;
    @Autowired
    IVungMienService iVungMienService;
    @Autowired
    IBaiDangService iBaiDangService;

    @ModelAttribute
    public List<DanhMuc> getAllDanhMuc() {
        return iDanhMucService.findAll();
    }

    @ModelAttribute
    public List<Huong> getAllHuong() {
        return iHuongService.findAll();
    }

    @ModelAttribute
    public List<VungMien> getAllVungMien() {
        return iVungMienService.findAll();
    }

    @ModelAttribute
    public List<BaiDang> getAllBaiDang() {
        return iBaiDangService.findAll();
    }

    @GetMapping(value = "/danh-muc/list")
    public ResponseEntity<ResponseObject> listDanhMuc() {
        List<DanhMuc> danhMucList = getAllDanhMuc();
        return new ResponseEntity<>(new ResponseObject(true, "OK", new HashMap<>(), danhMucList), HttpStatus.OK);
    }
    @GetMapping(value = "/huong/list")
    public ResponseEntity<ResponseObject> listHuong() {
        List<Huong> huongList = getAllHuong();
        return new ResponseEntity<>(new ResponseObject(true, "OK", new HashMap<>(), huongList), HttpStatus.OK);
    }
    @GetMapping(value = "/vung-mien/list")
    public ResponseEntity<ResponseObject> listVungMien() {
        List<VungMien> vungMienList = getAllVungMien();
        return new ResponseEntity<>(new ResponseObject(true, "OK", new HashMap<>(), vungMienList), HttpStatus.OK);
    }


    @PostMapping(value = "/bai-dang/create")
    public ResponseEntity<ResponseObject> create(@Valid @RequestBody BaiDangDto baiDangDto, BindingResult bindingResult) {
        baiDangDto.validate(baiDangDto, bindingResult);
        Map<String, String> errorMap = new HashMap<>();
        if (bindingResult.hasFieldErrors()) {
            bindingResult
                    .getFieldErrors()
                    .stream()
                    .forEach(f -> errorMap.put(f.getField(), f.getDefaultMessage()));
            return new ResponseEntity<>(new ResponseObject(false, "Failed!", errorMap, new ArrayList<>()), HttpStatus.BAD_REQUEST);
        } else {
            BaiDang baiDang = new BaiDang();
            BeanUtils.copyProperties(baiDangDto, baiDang);
            if (!baiDangDto.getDienTich().trim().equals("")) {
                baiDang.setDienTich(Double.parseDouble(baiDangDto.getDienTich()));
            }
            if (!baiDangDto.getGia().trim().equals("")) {
                baiDang.setGia(Double.parseDouble(baiDangDto.getGia()));
            }
            DanhMuc danhMuc = iDanhMucService.findById(baiDangDto.getDanhMuc());
            VungMien vungMien = iVungMienService.findById(baiDangDto.getVungMien());
            Huong huong = iHuongService.findById(baiDangDto.getHuong());
            if (danhMuc != null && vungMien != null && huong != null) {
                baiDang.setDanhMuc(danhMuc);
                baiDang.setVungMien(vungMien);
                baiDang.setHuong(huong);
                System.out.println("a");
                iBaiDangService.save(baiDang);
                return new ResponseEntity<>(HttpStatus.OK);

            } else {
                return new ResponseEntity<>(new ResponseObject(false, "Failed!", errorMap, new ArrayList<>()), HttpStatus.NOT_FOUND);
            }
        }
    }


    @GetMapping(value = "/bai-dang/list")
    public ResponseEntity<Page<BaiDang>> list(@PageableDefault(value = 3) Pageable pageable,
                                              @RequestParam(name = "dtS", required = false) String dienTich,
                                              @RequestParam(name = "gS", required = false) String gia,
                                              @RequestParam(name = "hS", required = false) String huong,
                                              @RequestParam(name = "s", required = false, defaultValue = "") String sort) {
        List<BaiDang> a = new ArrayList<>();
        Page<BaiDang> page = new PageImpl<>(a);
        Page<BaiDang> baiDangList = iBaiDangService.getAllBaiDangPagingAndSearchAndSort(pageable, dienTich, gia, huong, sort);
        return new ResponseEntity<>(baiDangList, HttpStatus.OK);
    }

    @PutMapping(value = "/bai-dang/update/{id}")
    public ResponseEntity<ResponseObject> update(@PathVariable int id, @Valid @RequestBody BaiDangDto baiDangDto, BindingResult bindingResult) {
        baiDangDto.validate(baiDangDto, bindingResult);
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(new ResponseObject(false, "Failed!", new HashMap<>(), new ArrayList<>()), HttpStatus.BAD_REQUEST);
        } else {
            BaiDang baiDang = iBaiDangService.findById(id);
            if (baiDang != null) {
                if (baiDang.getId() != baiDangDto.getId()) { // Check TH co nguoi thay doi Id tren URL khac voi Id cua data gui di
                    return new ResponseEntity<>(new ResponseObject(false, "Failed!", new HashMap<>(), new ArrayList<>()), HttpStatus.CONFLICT);
                } else {
                    BeanUtils.copyProperties(baiDangDto, baiDang);
                    if (!baiDangDto.getDienTich().trim().equals("")) {
                        baiDang.setDienTich(Double.parseDouble(baiDangDto.getDienTich()));
                    }
                    if (!baiDangDto.getGia().trim().equals("")) {
                        baiDang.setGia(Double.parseDouble(baiDangDto.getGia()));
                    }
                    DanhMuc danhMuc = iDanhMucService.findById(baiDangDto.getDanhMuc());
                    VungMien vungMien = iVungMienService.findById(baiDangDto.getVungMien());
                    Huong huong = iHuongService.findById(baiDangDto.getHuong());
                    if (danhMuc != null && vungMien != null && huong != null) {
                        baiDang.setDanhMuc(danhMuc);
                        baiDang.setVungMien(vungMien);
                        baiDang.setHuong(huong);
                        System.out.println("a");
                        iBaiDangService.save(baiDang);
                        return new ResponseEntity<>(HttpStatus.OK);

                    } else {
                        return new ResponseEntity<>(new ResponseObject(false, "Failed!", new HashMap<>(), new ArrayList<>()), HttpStatus.NOT_FOUND);
                    }
                }
            } else {
                return new ResponseEntity<>(new ResponseObject(false, "Failed!", new HashMap<>(), new ArrayList<>()), HttpStatus.NOT_FOUND);
            }
        }
    }

    @DeleteMapping(value = "/bai-dang/delete/{id}")
    public ResponseEntity<ResponseObject> delete(@PathVariable int id) {
        BaiDang baiDang = iBaiDangService.findById(id);
        if (baiDang != null) {
            iBaiDangService.deleteById(id);
            return new ResponseEntity<>(new ResponseObject(true, "OK", new HashMap<>(), new ArrayList<>()), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ResponseObject(false, "FAILED", new HashMap<>(), new ArrayList<>()), HttpStatus.NOT_FOUND);
        }
    }
}
