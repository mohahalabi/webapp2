package ch.supsi.webapp.web.repository;

import ch.supsi.webapp.web.model.Size;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SizeRepository extends JpaRepository<Size, String> {

}
