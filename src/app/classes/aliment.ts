export class Aliment{
    libelle: string;
    quantite: number;
    proteines: number;
    lipides: number;
    glucides: number;
    /**
     *
     */
    constructor(libelle: string) {
        this.libelle = libelle;
        this.quantite = 100;
        this.glucides = 30;
        this.lipides = 40;
        this.proteines = 30;
    }
    contains(chaine: string): boolean{
        return this.libelle.includes(chaine);
    }
}