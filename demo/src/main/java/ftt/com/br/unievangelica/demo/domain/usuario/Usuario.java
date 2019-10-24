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

    @NotEmpty /** NotEmpty usado apenas para strings **/
    @Column (name ="nome" , nullable = false)
    private String nome;

    @NotEmpty
    @Column (name ="sobrenome" , nullable = false)
    private String sobrenome;

    @NotNull /** Quando temos números é preferível usar NotNull **/
    @Column (name ="dataNascimento" , nullable = false)
    private Date dataNascimento;

    @NotNull
    @Column (name ="telefone" , nullable = false)
    private String telefone;

    @NotNull
    @Column (name ="cpfCnpj" , nullable = false)
    private String cpfCnpj;


    /**
     * Referenciando o ID da tabela Endereço
     */
    @OneToOne(cascade = CascadeType.ALL) /** Relação de OneToOne entre Usuário e Endereço **/
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private Endereco endereco;



}
