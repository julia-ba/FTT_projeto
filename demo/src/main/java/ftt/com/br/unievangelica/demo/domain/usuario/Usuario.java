package ftt.com.br.unievangelica.demo.domain.usuario;


import javax.persistence.*;
import javax.validation.constraints.*;

import ftt.com.br.unievangelica.demo.core.entity.AbstractEntity;
import ftt.com.br.unievangelica.demo.domain.endereco.Endereco;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/** Classe Usuário com lombok importado fazendo getter e setter **/
@Getter
@Setter
@Entity
@Table(name = "usuario")
public class Usuario extends AbstractEntity{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @NotEmpty /** NotEmpty usado apenas para strings **/
    @Min(value = 3)
    @Max(value = 50)
    @Column (name ="nome" , nullable = false)
    private String nome;

    @NotEmpty
    @Min(value = 3)
    @Max(value = 50)
    @Column (name ="sobrenome" , nullable = false)
    private String sobrenome;

    @NotNull /** Quando temos números é preferível usar NotNull **/
    @Max(value = 8)
    @Column (name ="dataNascimento" , nullable = false)
    private Date dataNascimento;

    @NotNull
    @Min(value = 11)
    @Max(value = 11)
    @Column (name ="telefone" , nullable = false)
    private String telefone;

    @NotNull
    @Min(value = 11)
    @Max(value = 14)
    @Column (name ="cpfCnpj" , nullable = false)
    private String cpfCnpj;


    /**
     * Referenciando o ID da tabela Endereço
     */
    @OneToOne(fetch = FetchType.EAGER) /** Relação de OneToOne entre Usuário e Endereço **/
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private Endereco endereco;

}
