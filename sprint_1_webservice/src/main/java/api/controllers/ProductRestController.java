package api.controllers;

import api.services.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/product")
public class ProductRestController {

    @Autowired
    IProductService iProductService;
}
