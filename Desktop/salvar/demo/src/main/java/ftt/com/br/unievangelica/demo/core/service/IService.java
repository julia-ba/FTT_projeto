package ftt.com.br.unievangelica.demo.core.service;

import org.springframework.validation.Errors;

import java.util.List;

public interface IService<T> {

    List<T> findAll();

    T findById(long id);

    T save(T object, Errors errors);

    void deleteById(long id);

}
