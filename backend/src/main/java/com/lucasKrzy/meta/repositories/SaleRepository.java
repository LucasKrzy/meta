package com.lucasKrzy.meta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lucasKrzy.meta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
