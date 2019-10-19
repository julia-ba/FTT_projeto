package ftt.com.br.unievangelica.demo.core.controller;

import ftt.com.br.unievangelica.demo.core.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
public abstract class AbstractController<T> extends ResponseAbstractController implements IController<T>{

    @Autowired
    private IService<T> service;

    //Busca por todos
    @GetMapping
    public ResponseEntity<?> findAll(){
        return jsonResponse(service.findAll());
    }

    //Busca por id
    @GetMapping("{id}")
    public ResponseEntity<?> findById(@PathVariable long id){
        return jsonResponse(service.findById(id));
    }

    //Salvar
    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody T object, Errors errors){
        return jsonResponse(service.save(object, errors));
    }

    //Atualizar -> sobrescreve tudo menos o id
    @PutMapping
    public ResponseEntity<?> update(@Validated @RequestBody T object, Errors errors){
        return jsonResponse(service.save(object, errors));
    }

    //Deleta
    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable long id){
        service.deleteById(id);
        return jsonResponse();
    }

}