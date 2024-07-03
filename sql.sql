-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema carlocation
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema carlocation
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `carlocation` DEFAULT CHARACTER SET utf8 ;
USE `carlocation` ;

-- -----------------------------------------------------
-- Table `carlocation`.`privilege`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`privilege` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`province`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`province` (
  `id` INT NOT NULL,
  `nom` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`ville`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`ville` (
  `id` INT NOT NULL,
  `nom` VARCHAR(45) NOT NULL,
  `province_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ville_province1_idx` (`province_id` ASC),
  CONSTRAINT `fk_ville_province1`
    FOREIGN KEY (`province_id`)
    REFERENCES `carlocation`.`province` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`utilisateurs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`utilisateurs` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(100) NOT NULL,
  `prenom` VARCHAR(100) NOT NULL,
  `anniversaire` DATE NULL,
  `adresse` VARCHAR(100) NULL,
  `code_postal` VARCHAR(45) NULL,
  `telephone` VARCHAR(45) NULL,
  `cellulaire` VARCHAR(45) NULL,
  `courriel` VARCHAR(255) NOT NULL,
  `privilege_id` INT NOT NULL,
  `nom_utilisateur` VARCHAR(45) NULL,
  `mot_de_passe` VARCHAR(255) NULL,
  `ville_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_clients_privilege_idx` (`privilege_id` ASC),
  UNIQUE INDEX `nom_utilisateur_UNIQUE` (`nom_utilisateur` ASC),
  INDEX `fk_utilisateurs_ville1_idx` (`ville_id` ASC),
  CONSTRAINT `fk_clients_privilege`
    FOREIGN KEY (`privilege_id`)
    REFERENCES `carlocation`.`privilege` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_utilisateurs_ville1`
    FOREIGN KEY (`ville_id`)
    REFERENCES `carlocation`.`ville` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`journal_de_connexion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`journal_de_connexion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `adresse_ip` VARCHAR(45) NOT NULL,
  `clients_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_journal_de_connexion_clients1_idx` (`clients_id` ASC),
  CONSTRAINT `fk_journal_de_connexion_clients1`
    FOREIGN KEY (`clients_id`)
    REFERENCES `carlocation`.`utilisateurs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`mode_paiement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`mode_paiement` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`expedition`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`expedition` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`statut`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`statut` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`commande`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`commande` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `prix` DOUBLE NOT NULL,
  `mode_paiement_id` INT NOT NULL,
  `expedition_id` INT NOT NULL,
  `utilisateurs_id` INT UNSIGNED NOT NULL,
  `statut_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_commande_mode_paiement1_idx` (`mode_paiement_id` ASC),
  INDEX `fk_commande_expedition1_idx` (`expedition_id` ASC),
  INDEX `fk_commande_utilisateurs1_idx` (`utilisateurs_id` ASC),
  INDEX `fk_commande_statut1_idx` (`statut_id` ASC),
  CONSTRAINT `fk_commande_mode_paiement1`
    FOREIGN KEY (`mode_paiement_id`)
    REFERENCES `carlocation`.`mode_paiement` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_commande_expedition1`
    FOREIGN KEY (`expedition_id`)
    REFERENCES `carlocation`.`expedition` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_commande_utilisateurs1`
    FOREIGN KEY (`utilisateurs_id`)
    REFERENCES `carlocation`.`utilisateurs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_commande_statut1`
    FOREIGN KEY (`statut_id`)
    REFERENCES `carlocation`.`statut` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`constructeur`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`constructeur` (
  `id` INT NOT NULL,
  `nom` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`modele`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`modele` (
  `id` INT NOT NULL,
  `nom` VARCHAR(45) NOT NULL,
  `constructeur_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_modele_constructeur1_idx` (`constructeur_id` ASC),
  CONSTRAINT `fk_modele_constructeur1`
    FOREIGN KEY (`constructeur_id`)
    REFERENCES `carlocation`.`constructeur` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`corps`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`corps` (
  `id` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`carburant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`carburant` (
  `id` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`motopropulseur`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`motopropulseur` (
  `id` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`transmission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`transmission` (
  `id` INT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`voiture`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`voiture` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `annee` YEAR NOT NULL,
  `date_arrive` DATE NOT NULL,
  `prix_paye` DOUBLE NOT NULL,
  `commande_id` INT NOT NULL,
  `modele_id` INT NOT NULL,
  `corps_id` INT NOT NULL,
  `carburant_id` INT NOT NULL,
  `motopropulseur_id` INT NOT NULL,
  `transmission_id` INT NOT NULL,
  `prix_vente` DOUBLE NOT NULL,
  `description` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_voiture_commande1_idx` (`commande_id` ASC),
  INDEX `fk_voiture_modele1_idx` (`modele_id` ASC),
  INDEX `fk_voiture_corps1_idx` (`corps_id` ASC),
  INDEX `fk_voiture_carburant1_idx` (`carburant_id` ASC),
  INDEX `fk_voiture_motopropulseur1_idx` (`motopropulseur_id` ASC),
  INDEX `fk_voiture_transmission1_idx` (`transmission_id` ASC),
  CONSTRAINT `fk_voiture_commande1`
    FOREIGN KEY (`commande_id`)
    REFERENCES `carlocation`.`commande` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_voiture_modele1`
    FOREIGN KEY (`modele_id`)
    REFERENCES `carlocation`.`modele` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_voiture_corps1`
    FOREIGN KEY (`corps_id`)
    REFERENCES `carlocation`.`corps` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_voiture_carburant1`
    FOREIGN KEY (`carburant_id`)
    REFERENCES `carlocation`.`carburant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_voiture_motopropulseur1`
    FOREIGN KEY (`motopropulseur_id`)
    REFERENCES `carlocation`.`motopropulseur` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_voiture_transmission1`
    FOREIGN KEY (`transmission_id`)
    REFERENCES `carlocation`.`transmission` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`taxes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`taxes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(45) NOT NULL,
  `taux` VARCHAR(45) NOT NULL,
  `province_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_taxes_province1_idx` (`province_id` ASC),
  CONSTRAINT `fk_taxes_province1`
    FOREIGN KEY (`province_id`)
    REFERENCES `carlocation`.`province` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`commande_has_taxes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`commande_has_taxes` (
  `commande_id` INT NOT NULL,
  `taxes_id` INT NOT NULL,
  `taux` DOUBLE NOT NULL,
  PRIMARY KEY (`commande_id`, `taxes_id`),
  INDEX `fk_commande_has_taxes_taxes1_idx` (`taxes_id` ASC),
  INDEX `fk_commande_has_taxes_commande1_idx` (`commande_id` ASC),
  CONSTRAINT `fk_commande_has_taxes_commande1`
    FOREIGN KEY (`commande_id`)
    REFERENCES `carlocation`.`commande` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_commande_has_taxes_taxes1`
    FOREIGN KEY (`taxes_id`)
    REFERENCES `carlocation`.`taxes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carlocation`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carlocation`.`images` (
  `id` INT NOT NULL,
  `est_principale` VARCHAR(45) NOT NULL,
  `chemin` VARCHAR(45) NOT NULL,
  `voiture_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_images_voiture1_idx` (`voiture_id` ASC),
  CONSTRAINT `fk_images_voiture1`
    FOREIGN KEY (`voiture_id`)
    REFERENCES `carlocation`.`voiture` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
