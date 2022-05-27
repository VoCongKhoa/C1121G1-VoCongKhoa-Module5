package api.controllers;

import api.services.ISupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/supplier")
public class SupplierRestController {

    @Autowired
    ISupplierService iSupplierService;
}
