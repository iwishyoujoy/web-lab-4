package com.iwishyoujoy.weblab4;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DotRepository extends JpaRepository<Dot, Long> {
    List<Dot> getDotsByOwner(String owner);

    void deleteByOwner(String owner);
}