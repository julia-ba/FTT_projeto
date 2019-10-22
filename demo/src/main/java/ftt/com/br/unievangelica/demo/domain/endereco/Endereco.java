package ftt.com.br.unievangelica.demo.domain.endereco;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import ftt.com.br.unievangelica.demo.core.entity.AbstractEntity;

import lombok.Getter;
import lombok.Setter;

/** Classe Endereço com lombok importado fazendo getter e setter **/
@Getter
@Setter
@Entity
@Table(name = "endereco")
public class Endereco extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @NotNull
    @Max(value = 8)
    @Column (name ="cep" , nullable = false)
    private String cep;

    @NotNull
    @Min(value = 3)
    @Column (name ="rua" , nullable = false)
    private String rua;

    @NotNull
    @Min(value = 3)
    @Column (name ="numero" , nullable = false)
    private Integer numero;

    @NotEmpty
    @Min(value = 3)
    @Column (name ="bairo" , nullable = false)
    private String bairro;

    @NotEmpty
    @Min(value = 3)
    @Column (name ="cidade" , nullable = false)
    private String cidade;

    @NotEmpty
    @Min(value = 2)
    @Max(value = 2)
    @Column (name ="estado" , nullable = false)
    private String estado;

}
