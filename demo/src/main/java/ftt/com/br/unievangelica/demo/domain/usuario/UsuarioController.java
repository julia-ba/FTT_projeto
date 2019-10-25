package ftt.com.br.unievangelica.demo.domain.usuario;

import ftt.com.br.unievangelica.demo.core.controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping(value="/api/usuario-form")
@RestController
public class UsuarioController  extends AbstractController<Usuario> {

}
