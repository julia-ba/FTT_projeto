package ftt.com.br.unievangelica.demo.domain.endereco;

import ftt.com.br.unievangelica.demo.core.controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping(value="/api/endereco")
@RestController
public class EnderecoController extends AbstractController<Endereco> {

}
