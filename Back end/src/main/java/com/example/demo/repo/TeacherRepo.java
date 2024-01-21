package com.example.demo.repo;

import com.example.demo.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface TeacherRepo extends JpaRepository<Teacher, Integer> {
    Optional<Teacher> findOneByTeacherEmailAndAndTeacherPassword(String email, String password);

    Teacher findByTeacherEmail(String email);
}
