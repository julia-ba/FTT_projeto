package ftt.com.br.unievangelica.demo.domain.endereco;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import ftt.com.br.unievangelica.demo.core.entity.AbstractEntity;

import ftt.com.br.unievangelica.demo.domain.usuario.Usuario;
import lombok.Getter;
import lombok.Setter;

/** Classe Endereço com lombok importado fazendo getter e setter **/
@Getter
@Setter
@Entity
@Table(name = "endereco")
public class Endereco extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @NotNull
    @Column (name ="cep" , nullable = false)
    private String cep;

    @NotNull
    @Column (name ="rua" , nullable = false)
    private String rua;

    @NotNull
    @Column (name ="numero" , nullable = false)
    private Integer numero;

    @NotEmpty
    @Column (name ="bairo" , nullable = false)
    private String bairro;

    @NotEmpty
    @Column (name ="cidade" , nullable = false)
    private String cidade;

    @NotEmpty
    @Column (name ="estado" , nullable = false)
    private String estado;

    @JsonIgnore /** Evita loop **/
    @OneToOne(mappedBy = "endereco" , cascade = CascadeType.ALL)
    private Usuario usuario;

}
