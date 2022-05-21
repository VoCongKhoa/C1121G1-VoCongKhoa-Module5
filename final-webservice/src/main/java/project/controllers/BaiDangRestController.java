package project.controllers;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
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

    @PostMapping(value = "/bai-dang/create")
    public ResponseEntity<ResponseObject> create(@Valid @RequestBody BaiDangDto baiDangDto, BindingResult bindingResult) {
        baiDangDto.validate(baiDangDto, bindingResult);
        Map<String, String> errorMap = new HashMap<>();
        if (bindingResult.hasFieldErrors()) {
            bindingResult
                    .getFieldErrors()
                    .stream()
                    .forEach(f -> errorMap.put(f.getField(),f.getDefaultMessage()));
            return new ResponseEntity<>(new ResponseObject(false,"Failed!", errorMap,new ArrayList<>()), HttpStatus.BAD_REQUEST);
        } else {
            BaiDang baiDang = new BaiDang();
            BeanUtils.copyProperties(baiDangDto, baiDang);
//            iBaiDangService.save(baiDang);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
