package api.controllers;

import api.services.IProductService;
import api.services.IStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/storage")
public class StorageRestController {

    @Autowired
    IStorageService iStorageService;

    @Autowired
    IProductService iProductService;


    //importProducts
    //id product
    //id
}
