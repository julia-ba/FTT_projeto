package ftt.com.br.unievangelica.demo.core.service;

import ftt.com.br.unievangelica.demo.core.exception.BadRequestException;
import ftt.com.br.unievangelica.demo.core.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.validation.Errors;

import java.util.List;
import java.util.Optional;

public abstract class AbstractService<T> implements IService<T> {

    @Autowired
    protected JpaRepository<T, Long> repository;

    public List<T> findAll() {
        return repository.findAll();
    }

    public T findById(long id) {
        Optional<T> object = repository.findById(id);
        if (object.isPresent()) {
            return object.get();
        }
        throw new NotFoundException();
    }

    public T save(T object, Errors errors) {
        if (errors.hasErrors()) {
            throw new BadRequestException(errors);
        }
        return repository.save(object);
    }

}