//
import { classNames } from "lib/utils";
import Image from "next/image";
import { VerticalTable } from "./vertical_table";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
const Research: React.FC = () => {
  const clinical = "Эмнэлзүйн туршилт";
  const basic = "Суурь судалгаа";
  const editorial = "Хянан магадлагаа дүгнэлт";
  const review = "Тоймчилсон дүгнэлт";
  const veterinary = "Мал эмнэлэг";
  const protocol = "Арга зүй";
  const book = "Book";

  const immunity = [
    {
      key: "immunity1",
      label: "Автоиммун өвчин",
      value: (
        <div>
          <p>Francisco Karkow, et al.</p>
          <p className="text-yellow-600">
            AHCC® in Sjögren’s Disease: One Bold Therapeutic Hypothesis
          </p>
          <p>EC Microbiol. 2020; 16(1).</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "immunity2",
      label: "Автоиммун өвчин",
      value: (
        <div>
          <p>Zaure Zhaparkhanova, et al.</p>
          <p className="text-yellow-600">
            Nutritional Immunotherapy in Autoimmune Thyroid Disease: Preliminary
            Results
          </p>
          <p>Endocrinology Quick Report. 2018; 2(50): 23-27.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "immunity3",
      label: "Дархлаа зохицуулан дэмжих",
      value: (
        <div>
          <p>Jean‑François Mallet, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/25596849/"
            target="_blank"
          >
            Active Hexose Correlated Compound (AHCC) promotes an intestinal
            immune response in BALB/c mice and in primary intestinal epithelial
            cell culture involving toll-like receptors TLR-2 and TLR-4
          </a>
          <p>EC Microbiol. 2020; 16(1).</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "immunity4",
      label: "Дархлаа зохицуулан дэмжих",
      value: (
        <div>
          <p>Loretta Olamigoke, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/26788109"
            target="_blank"
          >
            AHCC Activation and Selection of Human Lymphocytes via Genotypic and
            Phenotypic Changes to an Adherent Cell Type: A Possible Novel
            Mechanism of T Cell Activation
          </a>
          <p>Evid Based Complement Alternat Med. 2015; 2015: 508746.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "immunity5",
      label: "Дархлаа зохицуулан дэмжих",
      value: (
        <div>
          <p>Jun Takanari, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/25376719"
            target="_blank"
          >
            Effects of Active Hexose Correlated Compound on the Seasonal
            Variations of Immune Competence in Healthy Subjects
          </a>
          <p>J Evid Based Complementary Altern Med. 2015; 20(1): 28-34.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "immunity6",
      label: "Дархлаа зохицуулан дэмжих",
      value: (
        <div>
          <p>Mari Kogiso, et al.</p>
          <p className="text-yellow-600">
            Active Hexose Correlated Compound and T Cell Response in Hind – Limb
            – Unloaded BALB/c Mice
          </p>
          <p>Int J Surg. 2015; 2(5): 32-38.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "immunity7",
      label: "Дархлаа зохицуулан дэмжих",
      value: (
        <div>
          <p>Abdelali Daddaoua, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/23194525"
            target="_blank"
          >
            The nutritional supplement Active Hexose Correlated Compound (AHCC)
            has direct immunomodulatory actions on intestinal epithelial cells
            and macrophages involving TLR/MyD88 and NF-κB/MAPK activation
          </a>
          <p>Food Chem. 2013; 136(3-4): 1288-95.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "immunity8",
      label: "Дархлаа зохицуулан дэмжих",
      value: (
        <div>
          <p>Tominori Kimura, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/23224365"
            target="_blank"
          >
            Stabilization of human interferon-α1 mRNA by its antisense RNA
          </a>
          <p>Cell Mol Life Sci. 2013; 70(8): 1451-67.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "immunity9",
      label: "Дархлаа зохицуулан дэмжих",
      value: (
        <div>
          <p>Won-Woo Lee, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/22531483"
            target="_blank"
          >
            Active Hexose Correlated Compound promotes T helper (Th) 17 and 1
            cell responses via inducing IL-1β production from monocytes in
            humans
          </a>
          <p>Cell Immunol. 2012; 275(1-2): 19-23.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "immunity10",
      label: "Дархлаа зохицуулан дэмжих",
      value: (
        <div>
          <p>Zhinan Yin, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/20732368"
            target="_blank"
          >
            Effects of active hexose correlated compound on frequency of CD4+
            and CD8+ T cells producing interferon-γ and/or tumor necrosis
            factor-α in healthy adults
          </a>
          <p>Hum Immunol. 2010; 71(12): 1187-90.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "immunity11",
      label: "Дархлаа зохицуулан дэмжих",
      value: (
        <div>
          <p>Naoyoshi Terakawa, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/18791928"
            target="_blank"
          >
            Immunological Effect of Active Hexose Correlated Compound (AHCC) in
            Healthy Volunteers: A Double-Blind, Placebo-Controlled Trial
          </a>
          <p>Nutr Cancer. 2008; 60(5): 643-51.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "immunity12",
      label: "Пэрэтанит",
      value: (
        <div>
          <p>Katie M Love, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/23694866"
            target="_blank"
          >
            A natural immune modulator attenuates stress hormone and
            catecholamine concentrations in polymicrobial peritonitis
          </a>
          <p>J Trauma Acute Care Surg. 2013; 74(6): 1411-8.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "immunity13",
      label: "Синбиотик үйлдэл",
      value: (
        <div>
          <p>Abeed H Chowdhury, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/31618905"
            target="_blank"
          >
            Modulation of T Regulatory and Dendritic Cell Phenotypes Following
            Ingestion of Bifidobacterium longum, AHCC® and Azithromycin in
            Healthy Individuals
          </a>
          <p>Nutrients. 2019; 11(10): 2470.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "immunity14",
      label: "Синбиотик үйлдэл, шулуун гэдэсний үрэвсэл",
      value: (
        <div>
          <p>Borja Ocón, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/22941198"
            target="_blank"
          >
            Active hexose-correlated compound and Bifidobacterium longum BB536
            exert symbiotic effects in experimental colitis
          </a>
          <p>Eur J Nutr. 2013; 52(2): 457-66.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "immunity15",
      // label: "Адинокарсинома (нойр булчирхай, уушиг,  шулуун гэдэс)",
      label: "нойр булчирхай, уушиг, шулуун гэдэс",
      value: (
        <div>
          <p>Andrea Del Buono, et al.</p>
          <p className="text-yellow-600 underline">
            Polysaccharide from Lentinus edodes for Integrative Cancer
            Treatment: Immunomodulatory Effects on Lymphocyte Population
          </p>
          <p>World Cancer Research Journal. 2016; 3 (1): e652.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "immunity16",
      label: "Элэгний хавдар",
      value: (
        <div>
          <p>Zhiyun Cao, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/25861418"
            target="_blank"
          >
            Active hexose correlated compound potentiates the antitumor effects
            of low-dose 5-fluorouracil through modulation of immune function in
            hepatoma 22 tumor-being mice
          </a>
          <p>Nutr Res Pract. 2015; 9(2): 129-36.</p>
        </div>
      ),
      sub: clinical,
    },
  ];

  const infectiousDisease = [
    {
      key: "infectiousDisease1",
      label: "Папилома вирус (HPV)",
      value: (
        <div>
          <p>Victoria L Gau, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/35773058/"
            target="_blank"
          >
            Potential Role for Active Hexose Correlated Compound (AHCC) in
            Treatment of Recurrent Respiratory Papillomatosis
          </a>
          <p>J Voice. 2022; 36(4): 441-442.</p>
        </div>
      ),
      sub: editorial,
    },
    {
      key: "infectiousDisease2",
      label: "Папилома вирус (HPV)",
      value: (
        <div>
          <p>Judith A Smith, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/35814366/"
            target="_blank"
          >
            AHCC® Supplementation to Support Immune Function to Clear
            Persistent Human Papillomavirus Infections
          </a>
          <p>Front Oncol. 2022; 12: 881902.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "infectiousDisease3",
      label: "Папилома вирус (HPV)",
      value: (
        <div>
          <p>Manami Misu, et al.</p>
          <p className="text-yellow-600">
            Clinical Effects of AHCC® on High-risk Human Papillomavirus
            Infection and Secretory IgA
          </p>
          <p>Japanese Pharmacology & Therapeutics. 2019; 47(11): 1921-1928.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "infectiousDisease4",
      label: "Папилома вирус (HPV)",
      value: (
        <div>
          <p>Judith A Smith, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/30949451"
            target="_blank"
          >
            From Bench to Bedside: Evaluation of AHCC Supplementation to
            Modulate the Host Immunity to Clear High-Risk Human Papillomavirus
            Infections
          </a>
          <p>Front Oncol. 2019; 9: 173.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "infectiousDisease5",
      label: "Ковид-19",
      value: (
        <div>
          <p>Takeshi Katsuki, et al.</p>
          <p className="text-yellow-600">
            COVID-19 Pathology and Countermeasures ─Necessity of Severity
            Prevention Self-care─
          </p>
          <p>
            Journal of Japan Health Medicine Association, 29(2): 142-152, 2020
          </p>
        </div>
      ),
      sub: review,
    },
    {
      key: "infectiousDisease6",
      label: "Ковид-19",
      value: (
        <div>
          <p>Ali A. Rabaan, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/32878641/"
            target="_blank"
          >
            SARS-CoV-2/COVID-19 and advances in developing potential
            therapeutics and vaccines to counter this emerging pandemic
          </a>
          <p>Ann Clin Microbiol Antimicrob. 2020; 19(1): 40</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "infectiousDisease7",
      label: "Томуу",
      value: (
        <div>
          <p>Brooke E Roman, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/23351405"
            target="_blank"
          >
            Short-term supplementation with Active Hexose Correlated Compound
            (AHCC) improves the antibody response to influenza B vaccine
          </a>
          <p>Nutr Res. 2013; 33(1): 12-7.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "infectiousDisease8",
      label: "Томуу",
      value: (
        <div>
          <p>Shoko Nogusa, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/19285605"
            target="_blank"
          >
            Low-dose supplementation with active hexose correlated compound
            improves the immune response to acute influenza infection in C57BL/6
            mice
          </a>
          <p>Nutr Res. 2009; 29(2): 139-43.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "infectiousDisease9",
      label: "Трихнелла",
      value: (
        <div>
          <p>Beatriz López-Cauce, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/35427820/"
            target="_blank"
          >
            Lentinula edodes extract increases goblet cell number and Muc2
            expression in an intestinal inflammatory model of Trichinella
            spiralis infection
          </a>
          <p>Biomed Pharmacother. 2022; 150: 112937.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "infectiousDisease10",
      label: "P. aeruginosa",
      value: (
        <div>
          <p>Mireia Tena-Garitaonaindia, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/35369436/"
            target="_blank"
          >
            A Standardized Extract of Lentinula edodes Cultured Mycelium
            Inhibits Pseudomonas aeruginosa Infectivity Mechanisms
          </a>
          <p>Front Microbiol. 2022; 13: 814448.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "infectiousDisease11",
      label:
        "Томуу, Шувууны томуу, K.pneumoniae, C.albicans, P.aeruginosa, MRSA",
      value: (
        <div>
          <p>Barry W Ritz</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/18752476"
            target="_blank"
          >
            Supplementation with active hexose correlated compound increases
            survival following infectious challenge in mice
          </a>
          <p>Nutr Rev. 2008; 66(9): 526-31.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "infectiousDisease12",
      label: "Лейшманиоз",
      value: (
        <div>
          <p>María-Dolores Tabar, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/35037701/"
            target="_blank"
          >
            Leishmaniosis in a cat with chronic diarrhea as the only clinical
            manifestation
          </a>
          <p>J Vet Intern Med. 2022; 36(2): 753-757.</p>
        </div>
      ),
      sub: veterinary,
    },
    {
      key: "infectiousDisease13",
      label: "Лейшманиоз",
      value: (
        <div>
          <p>María Auxiliadora Dea-Ayuela, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="hhttps://pubmed.ncbi.nlm.nih.gov/32867338/"
            target="_blank"
          >
            Nucleotides and AHCC Enhance Th1 Responses In Vitro in
            Leishmania-Stimulated/Infected Murine Cells
          </a>
          <p>Molecules. 2020; 25(17): 3918.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "infectiousDisease14",
      label: "Лейшманиоз",
      value: (
        <div>
          <p>Rodolfo Oliveira Leal, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/30450219"
            target="_blank"
          >
            Granulomatous rhinitis secondary to feline leishmaniosis: report of
            an unusual presentation and therapeutic complications
          </a>
          <p>JFMS Open Rep. 2018; 4(2): 2055116918811374.</p>
        </div>
      ),
      sub: veterinary,
    },
    {
      key: "infectiousDisease15",
      label: "Лейшманиоз",
      value: (
        <div>
          <p>Sergi Segarra, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/29467015"
            target="_blank"
          >
            Prevention of disease progression in Leishmania infantum-infected
            dogs with dietary nucleotides and Active Hexose Correlated Compound
          </a>
          <p>Parasit Vectors. 2018; 11(1): 103.</p>
        </div>
      ),
      sub: veterinary,
    },
    {
      key: "infectiousDisease16",
      label: "Лейшманиоз",
      value: (
        <div>
          <p>Sergi Segarra, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/28495197"
            target="_blank"
          >
            Randomized, allopurinol-controlled trial of the effects of dietary
            nucleotides and active hexose correlated compound in the treatment
            of canine leishmaniosis
          </a>
          <p>Vet Parasitol. 2017; 239: 50-56.</p>
        </div>
      ),
      sub: veterinary,
    },
    {
      key: "infectiousDisease17",
      label: "Лейшманиоз",
      value: (
        <div>
          <p>Sergi Segarra.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.mdpi.com/2076-2607/9/12/2601"
            target="_blank"
          >
            Nutritional Modulation of the Immune Response Mediated by
            Nucleotides in Canine Leishmaniosis
          </a>
          <p>Microorganisms. 2021; 9(12): 2601.</p>
        </div>
      ),
      sub: veterinary,
    },
    {
      key: "infectiousDisease18",
      label: "Лайм өвчин",
      value: (
        <div>
          <p>John Salerno, et al.</p>
          <p className="text-yellow-600">
            A Pilot Open-Label Study Assessing the Effects of AHCC®
            Supplementation on Lyme Disease Patients
          </p>
          <p>
            Bioactive Compounds in Health and Disease. 2019; 2(11): 221-229.
          </p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "infectiousDisease19",
      label: "Уушигны өвчин(Mycobacterium)",
      value: (
        <div>
          <p>Masaki Fujita, et al.</p>
          <p className="text-yellow-600">
            Attenuation of Pulmonary Mycobacterium Avium Disease by Active
            Hexose Correlated Compound (AHCC) in Mice
          </p>
          <p>J Nutr Disorders Ther. 2015; 5: 4.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "infectiousDisease20",
      label: "Баруун НИЛ-ийн чичрэг",
      value: (
        <div>
          <p>Shuhui Wang, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/19141700/"
            target="_blank"
          >
            Oral Administration of Active Hexose Correlated Compound Enhances
            Host Resistance to West Nile Encephalitis in Mice
          </a>
          <p>J Nutr. 2009; 139(3): 598-602.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "infectiousDisease21",
      label: "Мэс заслын дараах хүндрэл (K.pneumoniae)",
      value: (
        <div>
          <p>Hernan Aviles, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/18304499"
            target="_blank"
          >
            Active hexose correlated compound activates immune function to
            decrease bacterial load in a murine model of intramuscular infection
          </a>
          <p>Am J Surg. 2008; 195(4): 537-45.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "infectiousDisease22",
      label: "Хламидиоз",
      value: (
        <div>
          <p>Tesfaye Belay, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/33558321/"
            target="_blank"
          >
            Active Hexose-Correlated Compound Restores Gene Expression and
            Protein Secretion of Protective Cytokines of Immune Cells in a
            Murine Stress Model during Chlamydia muridarum Genital Infection
          </a>
          <p>Infect Immun. 2021; 89(5): e00786-20.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "infectiousDisease23",
      label: "Хламидиоз",
      value: (
        <div>
          <p>Tesfaye Belay, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/27790645/"
            target="_blank"
          >
            Active Hexose Correlated Compound Activates Immune Function to
            Decrease Chlamydia trachomatis Shedding in a Murine Stress Model
          </a>
          <p>J Nutr Med Diet Care. 2015; 1(1): JNMDC-1-006.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "infectiousDisease24",
      label: "Аспергиллёз",
      value: (
        <div>
          <p>Alba Pérez-Cantero, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/31484389/"
            target="_blank"
          >
            Increased Efficacy of Oral Fixed-Dose Combination of Amphotericin B
            and AHCC® Natural Adjuvant against Aspergillosis
          </a>
          <p>Pharmaceutics. 2019; 11(9): 456.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "infectiousDisease25",
      label: "Гепапит С",
      value: (
        <div>
          <p>Sayam Thaiudom, et al.</p>
          <p className="text-yellow-600">
            A study of the efficacy of Active Hexose Correlated Compound (AHCC)
            in the treatment of chronic Hepatitis C patients at Phramongkutklao
            Hospital
          </p>
          <p>The Medical News (Thailand). 2010; 325: 13-16.</p>
        </div>
      ),
      sub: clinical,
    },
  ];
  const cancer = [
    {
      key: "cancer1",
      label: "Нойр булчирхайн хавдар",
      value: (
        <div>
          <p>Hiroaki Yanagimoto, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/35950537/"
            target="_blank"
          >
            Efficacy of Lentinula edodes Mycelia Extract on Chemotherapy-Related
            Tasted Disorders in Pancreatic Cancer Patients
          </a>
          <p>Nutr Cancer. 2023; 75(1): 236-246.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer2",
      label: "Нойр булчирхайн хавдар",
      value: (
        <div>
          <p>Daisuke Hashimoto, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/35151367/"
            target="_blank"
          >
            Efficacy of active hexose correlated compound on survival of
            patients with resectable/borderline resectable pancreatic cancer: a
            study protocol for a double-blind randomized phase II study
          </a>
          <p>Trials. 2022; 23(1): 135.</p>
        </div>
      ),
      sub: protocol,
    },
    {
      key: "cancer3",
      label: "Нойр булчирхайн хавдар",
      value: (
        <div>
          <p>Yasuhiro Kuramitsu, et al.</p>
          <p className="text-yellow-600">
            Analysis of Cancer-Related Proteins Using Electrophoresis and Its
            Clinical Application
          </p>
          <p>Electrophoresis Letters. 2021; 65(2): 23-27.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "cancer4",
      label: "Нойр булчирхайн хавдар",
      value: (
        <div>
          <p>Shajedul Islam, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/34386076/"
            target="_blank"
          >
            A standardized extract of cultured Lentinula edodes mycelia
            downregulates cortactin in gemcitabine‑resistant pancreatic cancer
            cells
          </a>
          <p>Oncol Lett. 2021; 22(3): 654.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer5",
      label: "Нойр булчирхайн хавдар",
      value: (
        <div>
          <p>Daisuke Hashimoto, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/34086127/"
            target="_blank"
          >
            Nutritional impact of active hexose-correlated compound for patients
            with resectable or borderline-resectable pancreatic cancer treated
            with neoadjuvant therapy
          </a>
          <p>Surg Today. 2021; 51(11): 1872-1876.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer6",
      label: "Нойр булчирхайн хавдар",
      value: (
        <div>
          <p>Anarkhuu Bold-Erdene, et al.</p>
          <p className="text-yellow-600">
            Clinical outcomes of active hexose correlated compound (AHCC®) and
            its effect on chemotherapy related adverse events in patients with
            unresectable pancreatic cancer
          </p>
          <p>Diagnosis. 2018; 83(3): 56-60.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer7",
      label: "Нойр булчирхайн хавдар",
      value: (
        <div>
          <p>Keisuke Kuhara, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/30396925"
            target="_blank"
          >
            CUB Domain-containing Protein 1 (CDCP1) Is Down-regulated by Active
            Hexose-correlated Compound in Human Pancreatic Cancer Cells
          </a>
          <p>Anticancer Res. 2018; 38(11): 6107-6111.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer8",
      label: "Нойр булчирхайн хавдар",
      value: (
        <div>
          <p>Hiroaki Yanagimoto, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/26847832"
            target="_blank"
          >
            Alleviating effect of Active Hexose Correlated Compound (AHCC) on
            chemotherapy-related adverse events in patients with unresectable
            pancreatic ductal adenocarcinoma
          </a>
          <p>Nutr Cancer. 2016; 68(2): 234-40.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer9",
      label: "Нойр булчирхайн хавдар",
      value: (
        <div>
          <p>Masayuki Tokunaga, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/26504030"
            target="_blank"
          >
            Active Hexose-correlated Compound Down-regulates Heat Shock Factor
            1, a Transcription Factor for HSP27, in Gemcitabine-resistant Human
            Pancreatic Cancer Cells
          </a>
          <p>Anticancer Res. 2015; 35(11): 6063-7.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer10",
      label: "Нойр булчирхайн хавдар",
      value: (
        <div>
          <p>Junya Nawata, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/25202061"
            target="_blank"
          >
            Active Hexose-correlated Compound Down-regulates Sex-determining
            Region Y-box 2 of Pancreatic Cancer Cells
          </a>
          <p>Anticancer Res. 2014; 34(9): 4807-11.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer11",
      label: "Нойр булчирхайн хавдар",
      value: (
        <div>
          <p>Shigeyuki Suenaga, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/24403454"
            target="_blank"
          >
            Active Hexose-correlated Compound Down-regulates HSP27 of Pancreatic
            Cancer Cells, and Helps the Cytotoxic Effect of Gemcitabine
          </a>
          <p>Anticancer Res. 2014; 34(1): 141-6.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer12",
      label: "Элэгний хавдар",
      value: (
        <div>
          <p>Toshiya Kamiyama, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/35075934/"
            target="_blank"
          >
            Preventing Recurrence of Hepatocellular Carcinoma After Curative
            Hepatectomy With Active Hexose-correlated Compound Derived From
            Lentinula edodes Mycelia
          </a>
          <p>Integr Cancer Ther. 2022; 21: 15347354211073066.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer13",
      label: "Элэгний хавдар",
      value: (
        <div>
          <p>Zhiyun Cao, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/25861418/"
            target="_blank"
          >
            Active hexose correlated compound potentiates the antitumor effects
            of low-dose 5-fluorouracil through modulation of immune function in
            hepatoma 22 tumor-being mice
          </a>
          <p>Nutr Res Pract. 2015; 9(2): 129-36.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer14",
      label: "Хөхний хавдар",
      value: (
        <div>
          <p>Koji Wakame, et al.</p>
          <p className="text-yellow-600">
            Long-term administration of Active Hexose Correlated Compound as a
            dietary supplement to a patient after breast cancer surgery and
            chemotherapy: A case report
          </p>
          <p>Integr Cancer Sci Ther. 2017; 4(1).</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer15",
      label: "Хөхний хавдар",
      value: (
        <div>
          <p>Mehran Haidari, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/24211779"
            target="_blank"
          >
            Disruption of endothelial adherens junction by invasive breast
            cancer cells is mediated by reactive oxygen species and is
            attenuated by AHCC.
          </a>
          <p>Life Sci. 2013; 93(25-26): 994-1003.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer16",
      label: "Хөхний хавдар",
      value: (
        <div>
          <p>Sho Hangai, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/23829813"
            target="_blank"
          >
            Effect of Active Hexose-Correlated Compound in Women Receiving
            Adjuvant Chemotherapy for Breast Cancer: A Retrospective Study
          </a>
          <p>J Altern Complement Med. 2013; 19(11): 905-10.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer17",
      label: "Хөхний хавдар",
      value: (
        <div>
          <p>Yoichi Matsui, et al.</p>
          <p className="text-yellow-600">
            Retrospective Study in Breast Cancer Patients Supplemented with AHCC
          </p>
          <p>Inte J Integr Oncol. 2009; 3(2): 12-16.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer18",
      label: "Эмийн гаж нөлөө",
      value: (
        <div>
          <p>Daisuke Nakamoto, et al.</p>
          <p className="text-yellow-600">
            Active Hexose Correlated Compound (AHCC) Alleviates
            Gemcitabine-Induced Hematological Toxicity in Non-Tumor-Bearing Mice
          </p>
          <p>Intern J Clin Med. 2012; 3: 361-367.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer19",
      label: "Эмийн гаж нөлөө",
      value: (
        <div>
          <p>Kota Shigama, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/19827270"
            target="_blank"
          >
            Alleviating effect of active hexose correlated compound (AHCC) for
            anticancer drug-induced side effects in non-tumor-bearing mice
          </a>
          <p>J Exp Ther Oncol. 2009; 8(1): 43-51.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer20",
      label: "Эмийн гаж нөлөө",
      value: (
        <div>
          <p>Buxiang Sun, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/19699163"
            target="_blank"
          >
            The effect of active hexose correlated compound in modulating
            cytosine arabinoside-induced hair loss, and 6-mercaptopurine- and
            methotrexate-induced liver injury in rodents
          </a>
          <p>Cancer Epidemiol. 2009; 33(3-4): 293-9.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer21",
      label: "Өндгөвчний хавдар",
      value: (
        <div>
          <p>Jin Young Choia, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/29111786"
            target="_blank"
          >
            Active Hexose Correlated Compound (AHCC) Inhibits the Proliferation
            of Ovarian Cancer Cells by Suppressing Signal Transducer and
            Activator of Transcription 3 (STAT3) Activation
          </a>
          <p>Nutr Cancer. 2018; 70(1): 109-115.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer22",
      label: "Өндгөвчний хавдар",
      value: (
        <div>
          <p>Wineeya Suknikhom, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/28440968"
            target="_blank"
          >
            The Effects of Active Hexose Correlated Compound (AHCC) on Levels of
            CD4+ and CD8+ in Patients with Epithelial Ovarian Cancer or
            Peritoneal Cancer Receiving Platinum Based Chemotherapy
          </a>
          <p>Asian Pac J Cancer Prev. 2017; 18(3): 633-638.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer23",
      label: "Түрүү булчирхайн хавдар",
      value: (
        <div>
          <p>Yoshiteru Sumiyoshi, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/20522448"
            target="_blank"
          >
            Dietary Administration of Mushroom Mycelium Extracts in Patients
            with Early Stage Prostate Cancers Managed Expectantly: A Phase II
            Study
          </a>
          <p>Jpn J Clin Oncol. 2010; 40(10): 967-72.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer24",
      label: "Түрүү булчирхайн хавдар",
      value: (
        <div>
          <p>Jeffrey Turner, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/19104437"
            target="_blank"
          >
            Dramatic prostate-specific antigen response with activated
            hemicellulose compound in metastatic castration-resistant prostate
            cancer
          </a>
          <p>Anticancer Drugs. 2009; 20(3): 215-6.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer25",
      label: "Шулуун гэдэсний хавдар",
      value: (
        <div>
          <p>Francesca Paganelli, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/34959725/"
            target="_blank"
          >
            The Combination of AHCC and ETAS Decreases Migration of Colorectal
            Cancer Cells, and Reduces the Expression of LGR5 and Notch1 Genes in
            Cancer Stem Cells: A Novel Potential Approach for Integrative
            Medicine
          </a>
          <p>Pharmaceuticals. 2021; 14(12): 1325.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer26",
      label: "Шулуун гэдэсний хавдар",
      value: (
        <div>
          <p>Maiko Takahashi, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/31777421/"
            target="_blank"
          >
            Activation of NF-E2 p45-related factor-2 transcription and
            inhibition of intestinal tumor development by AHCC, a standardized
            extract of cultured Lentinula edodes mycelia
          </a>
          <p>J Clin Biochem Nutr. 2019; 65(3): 203-208.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer27",
      label: "Дархлаа эмчилгээ(Шулуун гэдэсний хавдар)",
      value: (
        <div>
          <p>Hong-Jai Park, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/35514996/"
            target="_blank"
          >
            AHCC®, a standardized extract of cultured Lentinula edodes mycelia,
            promotes the anti-tumor effect of dual immune checkpoint blockade
            effect in murine colon cancer
          </a>
          <p>Front Immunol. 2022; 13: 875872.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer28",
      label: "Уушигний хавдар",
      value: (
        <div>
          <p>Reiki Ishizuka, et al.</p>
          <p className="text-yellow-600">
            Personalized Cancer Therapy for Stage IV Lung Cancer: Combined Use
            of Active Hexose Correlated Compound and Genistein Concentrated
            Polysaccharide
          </p>
          <p>Pers Med Univers. 2012; 1(1): 39-44.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer29",
      label: "Уушиг, хөхний хавдар",
      value: (
        <div>
          <p>Reiki Ishizuka, et al.</p>
          <p className="text-yellow-600">
            Review of Cancer Therapy with AHCC(R) and GCP(R); The Long-Term
            Follow-Up over 12 Years for Stage IV (M1) Cancer of the Lung and the
            Breast
          </p>
          <p>
            International Journal of Integrative Medicine. 2010; 2(1): 98-111.
          </p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer30",
      label: "Хөхний хавдарын эмийн үйлдлийг дэмжих",
      value: (
        <div>
          <p>Lata Mathew, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/28438054"
            target="_blank"
          >
            Evaluation of Active Hexose Correlated Compound (AHCC) in
            Combination With Anticancer Hormones in Orthotopic Breast Cancer
            Models
          </a>
          <p>Integr Cancer Ther. 2017; 16(3): 300-307.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer31",
      label: "Өндгөвчний хавдарын эмийн үйлдлийг дэмжих",
      value: (
        <div>
          <p>Rodney J Hunter, et al.</p>
          <p className="text-yellow-600">
            Evaluation of active hexose correlated compound (AHCC) in
            combination with pegylated liposomal doxorubicin for treatment of
            ovarian cancer
          </p>
          <p>Int J Appl Res Nat Prod. 2011; 4(3): 6-14.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer32",
      label: "Адинокарсинома(нойр булчирхай, уушиг,  шулуун гэдэс)",
      value: (
        <div>
          <p>Andrea Del Buono, et al.</p>
          <p className="text-yellow-600">
            Polysaccharide from Lentinus edodes for Integrative Cancer
            Treatment: Immunomodulatory Effects on Lymphocyte Population
          </p>
          <p>World Cancer Research Journal. 2016; 3 (1): e652.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer33",
      label: "Ходоод, шулуун гэдэсний хавдар",
      value: (
        <div>
          <p>Yusai Kawaguchi</p>
          <p className="text-yellow-600">
            Improved Survival of Patients with Gastric Cancer or Colon Cancer
            when treated with Active Hexose Correlated Compound (AHCC): Effect
            of AHCC on digestive system cancer
          </p>
          <p>Natural Medicine Journal. 2009; 1(1).</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer34",
      label: "Цусны хавдар",
      value: (
        <div>
          <p>Kavin Fatehchand, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/28727820"
            target="_blank"
          >
            Active hexose-correlated compound enhances
            extrinsic-pathway-mediated apoptosis of Acute Myeloid Leukemic cells
          </a>
          <p>PLoS One. 2017; 12(7): e0181729.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer35",
      label: "Толгой хүзүүний хавдар",
      value: (
        <div>
          <p>Dillip Kumar Parida, et al.</p>
          <p className="text-yellow-600">
            Integrating Complimentary and Alternative Medicine in Form of Active
            Hexose Correlated Compound (AHCC) in the Management of Head & Neck
            Cancer Patients
          </p>
          <p>Intern J Clin Med. 2011; 2, 588-592.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer36",
      label: "Шүлсний булчирхайн хавдар",
      value: (
        <div>
          <p>Tamer A Badawi, et al.</p>
          <p className="text-yellow-600">
            Immunoprophylactic Effect of Active Hexose Correlated Compound on
            Normal and Induced Submandibular Salivary Gland Neoplasm in Albino
            Rats
          </p>
          <p>Cairo Dental Journal. 2012; 28(1): 485-490.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer37",
      label: "Шулуун гэдэс, Нойр булчирхай, Уушиг Өндгөвчний хавдар",
      value: (
        <div>
          <p>Kavin Fatehchand, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/24611562"
            target="_blank"
          >
            Reduction of Adverse Effects by a Mushroom Product, Active Hexose
            Correlated Compound (AHCC) in Patients with Advanced Cancer during
            Chemotherapy-The Significance of the Levels of HHV-6 DNA in Saliva
            as a Surrogate Biomarker during Chemotherapy.
          </a>
          <p>Nutr Cancer. 2014; 66(3): 377-82.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "cancer38",
      label: "Үүдэл эсийн хавдар, Хөхний хавдар",
      value: (
        <div>
          <p>Émilie A Graham, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/28886271"
            target="_blank"
          >
            MicroRNA signature in the chemoprevention of functionally-enriched
            stem and progenitor pools (FESPP) by Active Hexose Correlated
            Compound (AHCC)
          </a>
          <p>Cancer Biol Ther. 2017; 18(10): 765-774.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer39",
      label: "Апотозис, Үүдэл эсийн хавдар",
      value: (
        <div>
          <p>Bruna Corradetti, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/31416372"
            target="_blank"
          >
            Bioactive Immunomodulatory Compounds: A Novel Combinatorial Strategy
            for Integrated Medicine in Oncology? BAIC Exposure in Cancer Cells
          </a>
          <p>Integr Cancer Ther. 2019; 18: 1534735419866908.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "cancer40",
      label: "Малигнант Меланома",
      value: (
        <div>
          <p>Rosa Mistica Ignacio, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://pubmed.ncbi.nlm.nih.gov/26082022/"
            target="_blank"
          >
            Therapeutic effect of Active Hexose-Correlated Compound (AHCC)
            combined with CpG-ODN (oligodeoxynucleotide) in B16 melanoma murine
            model
          </a>
          <p>Cytokine. 2015; 76(2): 131-137.</p>
        </div>
      ),
      sub: basic,
    },
  ];
  const other = [
    {
      key: "other1",
      label: "Goiter",
      value: (
        <div>
          <p>Zaure Zhaparkhanova, et al.</p>
          <p className="text-yellow-600">
            The effect of active hexose correlated compound on (multi) nodular
            euthyroid goiter: A double-blind placebo-controlled study
          </p>
          <p>J Clin Med Kaz. 2021; 18(2): 66-71.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "other2",
      label: "Гепапит",
      value: (
        <div>
          <p>Yoshito Tanaka, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/24878381"
            target="_blank"
          >
            Adenosine, a hepato-protective component in active hexose correlated
            compound: Its identification and iNOS suppression mechanism
          </a>
          <p>Nitric Oxide. 2014; 40: 75-86.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "other3",
      label: "Гепапит",
      value: (
        <div>
          <p>Kosuke Matsui, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/22076046"
            target="_blank"
          >
            Active Hexose Correlated Compound Inhibits the Expression of
            Proinflammatory Biomarker iNOS in Hepatocytes
          </a>
          <p>Eur Surg Res. 2011; 47(4): 274-83.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "other4",
      label: "Гепапит",
      value: (
        <div>
          <p>Tadayoshi Okumura, et al.</p>
          <p className="text-yellow-600">
            Inhibition of iNOS induction by functional food AHCC (Screening of
            food with “hepatoprotective effect” using in vitro hepatocytes)
          </p>
          <p>
            Journal of the Japanese Society of Food Engineering. 2010; 30(3):
            100-106.
          </p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "other5",
      label: "Эмийн үйлдлийг дэмжих",
      value: (
        <div>
          <p>Rachel E. Carlson, et al.</p>
          <p className="text-yellow-600">
            Screening for potential pathways of drug-supplement interactions
            between AHCC® and common medications
          </p>
          <p>IJNF. 2018; 4(5): 32-36.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "other6",
      label: "Эмийн үйлдлийг дэмжих",
      value: (
        <div>
          <p>Larry W Coffer, et al.</p>
          <p className="text-yellow-600">
            Evaluation of active hexose correlated compound (AHCC) on phase II
            drug metabolism pathways and the implications for supplement-drug
            interactions
          </p>
          <p>J Integr Oncol. 2015; doi:10.4172/2329-6771.1000142.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "other7",
      label: "Эмийн үйлдлийг дэмжих",
      value: (
        <div>
          <p>Claire M Mach, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/19087767"
            target="_blank"
          >
            Evaluation of Active Hexose Correlated Compound Hepatic Metabolism
            and Potential for Drug Interactions with Chemotherapy Agents
          </a>
          <p>J Soc Integr Oncol. 2008; 6(3): 105-9.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "other8",
      label: "Үжил",
      value: (
        <div>
          <p>Marie-Francoise Doursout, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/27500458"
            target="_blank"
          >
            Active hexose correlated compound modulates LPS-induced hypotension
            and gut injury in rats
          </a>
          <p>Int Immunopharmacol. 2016; 39: 280-286.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "other9",
      label: "Шулуун гэдэсний үрэвсэл",
      value: (
        <div>
          <p>Cristina Mascaraque, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/25186628"
            target="_blank"
          >
            Active hexose correlated compound exerts therapeutic effects in
            lymphocyte driven colitis
          </a>
          <p>Mol Nutr Food Res. 2014; 58(12): 2379-82.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "other10",
      label: "Мэдрэлийн стресс",
      value: (
        <div>
          <p>Jun Takanari, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/29558822"
            target="_blank"
          >
            Effects of AHCC® on Immune and Stress Responses in Healthy
            Individuals
          </a>
          <p>J Evid Based Integr Med. 2018; 23: 2156587218756511.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "other11",
      label: "Нярай хүүхдийн таталт (Эплепси)",
      value: (
        <div>
          <p>Natalia V Mikhailichenko, et al.</p>
          <p className="text-yellow-600">
            An open label trial of a standardized extract of cultured Lentinula
            edodes mycelia (ECLM) in children with refractory epilepsy
          </p>
          <p>FFHD. 2019; 9(3): 145-156.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "other12",
      label: "Булчингийн атрофи",
      value: (
        <div>
          <p>Young-Ju Song, et al.</p>
          <p className="text-yellow-600">
            AHCC Supplementation Attenuates Muscle Atrophy via Akt Activation in
            Hindlimb-suspended Rat
          </p>
          <p>Biotechnol Bioprocess Eng. 2019; 24: 476-482.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "other13",
      label: "Нарийн гэдэсний гэмтэл",
      value: (
        <div>
          <p>Yosuke Ueyama, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/31254899"
            target="_blank"
          >
            Active Hexose Correlated Compound Has Protective Effects in
            Ischemia-Reperfusion Injury of the Rat Small Intestine
          </a>
          <p>J Surg Res. 2019; 243: 265-273.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "other14",
      label: "Элэгний үйл ажиллагааны доголдол",
      value: (
        <div>
          <p>Richi Nakatake, et al.</p>
          <p className="text-yellow-600">
            Protective effects of active hexose correlated compound in a rat
            model of liver injury after hepatectomy
          </p>
          <p>FFHD. 2016; 6(11): 702-717.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "other15",
      label: "Туузан хорхой (Nematode)",
      value: (
        <div>
          <p>Tetsuya Okuyama, et al.</p>
          <p className="text-yellow-600">
            Active Hexose Correlated Compound Extends the Lifespan and Increases
            the Thermotolerance of Nematodes
          </p>
          <p>FFHD. 2013; 3(6):166-182.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "other16",
      label: "Ген экспрешн",
      value: (
        <div>
          <p>Koji Wakame, et al.</p>
          <p className="text-yellow-600">
            DNA microarray analysis of gene expression changes in ICR mouse
            liver following treatment with active hexose correlated compound
          </p>
          <p>Integr Mol Med. 2016; 3(3): 739-744.</p>
        </div>
      ),
      sub: basic,
    },
    {
      key: "other17",
      label: "Архинаас үүдэлтэй элэгний өөхжилт",
      value: (
        <div>
          <p>Hyangkyoung Kim, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/25744424"
            target="_blank"
          >
            Effect of Active Hexose Correlated Compound (AHCC) in
            Alcohol-Induced Liver Enzyme Elevation
          </a>
          <p>J Nutr Sci Vitaminol. 2014; 60(5): 348-56.</p>
        </div>
      ),
      sub: clinical,
    },
    {
      key: "other18",
      label: "",
      value: (
        <div>
          <p>Hajime Fujii, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/20951179"
            target="_blank"
          >
            Genotoxicity and subchronic toxicity evaluation of Active Hexose
            Correlated Compound (AHCC)
          </a>
          <p>Regul Toxicol Pharmacol. 2011; 59(2): 237-50.</p>
        </div>
      ),
      sub: basic,
    },
  ];
  const reviewData = [
    {
      key: "review1",
      label: "Нэгдмэл эмчилгээ",
      value: (
        <div>
          <p>Takehito Miura</p>
          <p className="text-yellow-600">
            Unwellness and Functional Foods: The Expected Role of Pharmacies
          </p>
          <p>J Jpn Mibyou Assoc. 2022; 28(2): 43-48.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review2",
      label: "Нэгдмэл эмчилгээ",
      value: (
        <div>
          <p>Jun-Young Choi</p>
          <p className="text-yellow-600">
            Нэгдмэл эмчилгээ for Improvement of Quality of Life in Cancer
            Patients
          </p>
          <p>J Korean Med Assoc. 2008; 51(5): 435-448.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review3",
      label: "Дархлаа",
      value: (
        <div>
          <p>Hiroshi Nishioka, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/31930148"
            target="_blank"
          >
            The Effects of AHCC®, a Standardized Extract of Cultured Lentinura
            edodes Mycelia, on Natural Killer and T Cells in Health and Disease:
            Reviews on Human and Animal Studies
          </a>
          <p>J Immunol Res. 2019; 2019: 3758576</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review4",
      label: "Дархлаа",
      value: (
        <div>
          <p>Hiroshi Nishioka, et al.</p>
          <p className="text-yellow-600">
            Potentiating action of AHCC on natural immunity
          </p>
          <p>Medical Science Digest. 2009; 35(6): 241-244.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review5",
      label: "Түрүү булчирхайн хавдар",
      value: (
        <div>
          <p>Philippa J Cheetham, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/22052755"
            target="_blank"
          >
            Diet and prostate cancer – a holistic approach to management
          </a>
          <p>Arch Esp Urol. 2011; 64(8): 720-34.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review6",
      label: "Infection, COVID-19",
      value: (
        <div>
          <p>Francesco Di Pierro, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="https://www.ncbi.nlm.nih.gov/pubmed/32162896"
            target="_blank"
          >
            Possible therapeutic role of a highly standardized mixture of active
            compounds derived from cultured Lentinula edodes mycelia (AHCC) in
            patients infected with 2019 novel coronavirus
          </a>
          <p>Minerva Gastroenterol Dietol. 2020; 66(2): 172-176.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review7",
      label: "Харшил, аутоимун өвчин, Амьдралын хэв маягаас үүдсэн өвчин",
      value: (
        <div>
          <p>Manami Misu, et al.</p>
          <p className="text-yellow-600">
            Various functions of AHCC® – Case Report
          </p>
          <p>New Food Industry. 2017; 59(2): 14-21.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review8",
      label: "Гэрийн тэжээвэр амьтан",
      value: (
        <div>
          <p>Yutaka Horiuchi, et al.</p>
          <p className="text-yellow-600">
            Complementary and Alternative Medicine and AHCC®, GCP® in
            Companion Animals
          </p>
          <p>Companion Animal Practice. 2012; 4: 53-57.</p>
        </div>
      ),
      sub: veterinary,
    },
    {
      key: "review9",
      label: "Гэрийн тэжээвэр амьтан",
      value: (
        <div>
          <p>Takashi Nishizawa, et al.</p>
          <p className="text-yellow-600">
            Alpha Glucan (AHCC Liquid) Activates Macrophages More than Beta
            Glucan – Prospects for Basidiomycetes
          </p>
          <p>Companion Animal Practice. 2011 Apr.</p>
        </div>
      ),
      sub: veterinary,
    },
    {
      key: "review10",
      label: "Гэрийн тэжээвэр амьтан",
      value: (
        <div>
          <p>Mamoru Onuma, et al.</p>
          <p className="text-yellow-600">
            The supplementation therapy of caine dermatology in my hospital
          </p>
          <p>
            Japanese Journal of Small Animal Practice. 2008; 27(6): 340-346.
          </p>
        </div>
      ),
      sub: veterinary,
    },
    {
      key: "review11",
      label: "",
      value: (
        <div>
          <p>Mikio Nishizawa, et al.</p>
          <p className="text-yellow-600">
            Assessment of anti-inflammatory effects of Japanese Kampo medicine
            versus functional foods
          </p>
          <p>FFHD. 2019; 9(2): 79-91.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review12",
      label: "",
      value: (
        <div>
          <p>Hiroshi Nishioka, et al.</p>
          <p className="text-yellow-600">
            Various functions of a standardized extract of cultured Lentinula
            edodes mycelia (AHCC®)
          </p>
          <p>Medical Science Digest. 2019; 45(2): 127-130.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review13",
      label: "",
      value: (
        <div>
          <p>Koji Wakame</p>
          <p className="text-yellow-600">
            Research and functional development of basidiomycete culture
            extracts
          </p>
          <p>Agricultural biotechnology. 2017; 1(4): 438-442.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review14",
      label: "",
      value: (
        <div>
          <p>Robert M Hackman, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/25144361"
            target="_blank"
          >
            Forecasting Nutrition Research in 2020
          </a>
          <p>J Am Coll Nutr. 2014; 33(4): 340-6.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review15",
      label: "",
      value: (
        <div>
          <p>Catherine Ulbricht, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/23931762"
            target="_blank"
          >
            An Evidence-Based Systematic Review of Active Hexose Correlated
            Compound (AHCC) by the Natural Standard Research Collaboration
          </a>
          <p>J Diet Suppl. 2013; 10(3): 264-308.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review16",
      label: "",
      value: (
        <div>
          <p>Yasuo Kamiyama</p>
          <p className="text-yellow-600">AHCC: basic and clinical research</p>
          <p>
            Journal of the society tropical resources technologists. 2011;
            27(1): 1-8.
          </p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review17",
      label: "",
      value: (
        <div>
          <p>Shinil K Shah, et al.</p>
          <a
            className="text-yellow-600 underline"
            href="http://www.ncbi.nlm.nih.gov/pubmed/21628606"
            target="_blank"
          >
            An Evidence-Based Review of a Lentinula edodes Mushroom Extract as
            Нэгдмэл эмчилгээ in the Surgical Oncology Patient
          </a>
          <p>J Parenter Enteral Nutr. 2011; 35(4): 449-58.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review18",
      label: "",
      value: (
        <div>
          <p>Barry W Ritz</p>
          <p className="text-yellow-600">
            Active Hexose Correlated Compound (AHCC) and Immune Outcomes in
            Humans: A Review
          </p>
          <p>Natural Medicine Journal. 2011; 3(1): 3-7.</p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review19",
      label: "",
      value: (
        <div>
          <p>Takehito Miura, et al.</p>
          <p className="text-yellow-600">
            Basic and Clinical Studies on Active Hexose Correlated Compound
          </p>
          <p>
            Biotechnology in Functional Foods and Nutraceuticals. 2010: 51-58.
          </p>
        </div>
      ),
      sub: book,
    },
    {
      key: "review20",
      label: "",
      value: (
        <div>
          <p>Takehito Miura, et al.</p>
          <p className="text-yellow-600">
            Basic and Clinical Studies on AHCC —Recent Topics—
          </p>
          <p>
            Japanese Journal of Complementary and Alternative Medicine. 2009;
            6(1): 1-7.
          </p>
        </div>
      ),
      sub: review,
    },
    {
      key: "review21",
      label: "",
      value: (
        <div>
          <p>Kentaro Kitadate</p>
          <p className="text-yellow-600">
            Augmentation of Anticancer Activity and Attenuation of Side Effect
            by AHCC
          </p>
          <p>FOOD Style 21. 2008; 132: 69-72.</p>
        </div>
      ),
      sub: basic,
    },
  ];
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-4 pb-10">
        <div className="flex gap-x-2">
          <p className="bg-[#fff5ec] font-bold text-2xl p-2 rounded">AHCC®</p>
          <p className="justify-center text-yellow-600 p-2">
            Судалгааны үр дүн
          </p>
        </div>
        <p className="font-bold text-2xl border-l-yellow-600 border-2 border-y-0 border-r-0 pl-2">
          Эрдэм шинжилгээний өгүүлэл
        </p>
      </div>
      <p className="font-bold text-[22px] bg-[#fff5ec] p-2 rounded">
        Эрдэм шинжилгээний судалгаа хамтран хийх хүсэлтэй бол бидэнтэй
        холбогдоно уу.
      </p>
      <div className="grid md:grid-cols-5 gap-x-5 gap-y-2">
        <Link
          href={"#Immunity"}
          className="flex gap-x-2 border-x-0 border-t-0 border-b-yellow-600 border-2 justify-between hover:text-yellow-500 text-yellow-600"
        >
          <p className="flex items-center">Дархлаа</p>
          <div className="items-center flex">
            <ChevronDownIcon width={12} height={12} />
          </div>
        </Link>
        <Link
          href={"#Infectious"}
          className="flex gap-x-2 border-x-0 border-t-0 border-b-yellow-600 border-2 justify-between hover:text-yellow-500 text-yellow-600"
        >
          <p className="flex items-center">Халдварт өвчин</p>
          <div className="items-center flex">
            <ChevronDownIcon width={12} height={12} />
          </div>
        </Link>
        <Link
          href={"#Cancer"}
          className="flex gap-x-2 border-x-0 border-t-0 border-b-yellow-600 border-2 justify-between hover:text-yellow-500 text-yellow-600"
        >
          <p className="flex items-center">Хавдар</p>
          <div className="items-center flex">
            <ChevronDownIcon width={12} height={12} />
          </div>
        </Link>
        <Link
          href={"#Other"}
          className="flex gap-x-2 border-x-0 border-t-0 border-b-yellow-600 border-2 justify-between hover:text-yellow-500 text-yellow-600"
        >
          <p className="flex items-center">Бусад</p>
          <div className="items-center flex">
            <ChevronDownIcon width={12} height={12} />
          </div>
        </Link>
        <Link
          href={"#Other"}
          className="flex gap-x-2 border-x-0 border-t-0 border-b-yellow-600 border-2 justify-between hover:text-yellow-500 text-yellow-600"
        >
          <p className="flex items-center">Тоймчилсон дүгнэлт</p>
          <div className="items-center flex">
            <ChevronDownIcon width={12} height={12} />
          </div>
        </Link>
      </div>
      <h1 className="font-bold text-2xl" id="Immunity">
        Дархлаа
      </h1>
      <VerticalTable
        className={classNames("[&_th]:w-1/4 [&_th]:bg-orange-50")}
        items={immunity}
      />

      <h1 className="font-bold text-2xl" id="Infectious">
        Халдварт өвчин
      </h1>
      <VerticalTable
        className={classNames("[&_th]:w-1/4 [&_th]:bg-orange-50")}
        items={infectiousDisease}
      />

      <h1 className="font-bold text-2xl" id="Cancer">
        Хавдар
      </h1>
      <VerticalTable
        className={classNames("[&_th]:w-1/4 [&_th]:bg-orange-50")}
        items={cancer}
      />

      <h1 className="font-bold text-2xl" id="Other">
        Бусад
      </h1>
      <VerticalTable
        className={classNames("[&_th]:w-1/4 [&_th]:bg-orange-50")}
        items={other}
      />

      <h1 className="font-bold text-2xl" id="review">
        Тоймчилсон дүгнэлт
      </h1>
      <VerticalTable
        className={classNames("[&_th]:w-1/4 [&_th]:bg-orange-50")}
        items={reviewData}
      />
    </div>
    // <div
    //   className={classNames(
    //     "flex flex-col justify-center gap-y-5 text-black break-all"
    //   )}
    // >
    //   <div>
    //     <h1 className="text-xl font-bold">
    //       ЭРДЭМ ШИНЖИЛГЭЭ, ШИНЭ БҮТЭЭГДЭХҮҮНИЙ ХӨГЖҮҮЛЭЛТ:
    //     </h1>
    //     <h1 className="text-xl font-bold">АЛСЫН ХАРАА:</h1>
    //     <p>
    //       Эрүүл амьдралын хэв маяг хэвшүүлэн сахих нийгмийн шаардлага,
    //       хэргэцээнд нийцсэн шинэ бүтээгдэхүүний технологи боловсруулан
    //       хөгжүүлэх нь тус компаний алсын харааны бодлогын тулгуур ба
    //       <span className="font-bold">
    //         “Байгалийн хүчийг ашиглан Эх дэлхийд инээмсгэлэл бэлэглэх”
    //       </span>
    //       зорилтынхоо хүрээнд шинжлэх ухаан-иновацид суурилсан шинэ
    //       бүтээгдэхүүн-үр ашиг бүтээхийг эрхэмлэдэг.
    //     </p>
    //   </div>
    //   <div>
    //     <h1 className="text-xl font-bold">ЭРДЭМ ШИНЖИЛГЭЭНИЙ АЖЛЫН ҮР ДҮН:</h1>
    //     <p className="whitespace-pre-wrap">
    //       {`Судалгааны лабораторийн анагаах ухаан, эм зүй, хими, биологи, хөдөө аж аж ахуй, байгаль орчны салбарын судлаачид нь байгалийн гаралтай биологий идэвхт шинэ нэгдэл гарган авч, түүний гол үйлчлэгч бодисын хүний биед үзүүлэх эерэг үйлдэлийг судлан тодорхойлоход анхараал хандуулдаг.`}
    //     </p>
    //   </div>
    //   <div>
    //     <h1 className="text-xl font-bold">
    //       AHCC® БЭЛДМЭЛ-ЭРДЭМ ШИНЖИЛГЭЭ-СУДАЛГАА:
    //     </h1>
    //     <p>
    //       Биологийн идэвхт бэлдмэл, түүн дотроос AHCC® бэлдмэлийн эмчилгээний
    //       хооллолт болон хосолмол эмчилгээний практик хэрэглээнд хүний дархлааг
    //       хэвийн зохистой төвшинд зохицуулан идэвжхүүлж эрүүл мэндийг дэмжих
    //       үйлдэл болон одоогоор бүрэн танигдаагүй буй эмнэлзүйн зарим үйлдэл, ач
    //       холбогдолыг шинжлэх ухааны үндэслэлтэйгээр танин мэдэх чиглэлээр
    //       дэлхийн тэргүүлэх зэргийн 100 гаруй их сургууль, судалгааны
    //       хүрээлэнтэй хамтран ажилладаг. (
    //       <a
    //         target="_blank"
    //         className="text-blue-500"
    //         href="https://www.aminoup.jp/en/research/"
    //       >
    //         https://www.aminoup.jp/en/research/
    //       </a>
    //       )
    //     </p>
    //   </div>
    //   <div className="flex justify-center">
    //     <Image
    //       alt="image"
    //       src={"/assets/news/news2.jpg"}
    //       width={500}
    //       height={500}
    //     />
    //   </div>
    //   <div>
    //     <p className="whitespace-pre-wrap">
    //       {`AHCC® бэлдмэлийн хосолмол эмчилгээний практик хэрэглээ, түүн дотроос эрүүл хүний дархлааг хэвийн зохистой төвшинд зохицуулан идэвхжүүлж элдэв эмгэг, халдвараас сэргийлэхэд дэм үзүүлэхийн зэрэгцээ, халдварт өвчин, хавдар, харшлын өвөрмөц эмчилгээний үр дүнг дэмжих, хавдарын хими, туяа эмчилгээний эмийн гаж нөлөөг бууруулж, үр дүнг дэмжих, дарангуйлагдсан дархлааг сэргээн зохицуулж, мэс заслын дараа нөхөн сэргэлтийг дэмжин өвчтний амьдралын чанарыг дээшлүүлж, хавдар дахих, амьдрах хугацааг уртасгахад бодит дэм үзүүлдэг үйлдэл нь шинжлэх ухааны үндэслэлтэйгээр тодорхойлогдон ба одоогоор 140 гаруй эрдэм шинжилгээний өгүүлэл, 30 гаруй эмнэлзүйн туршилт судалгааны дүгнэлтүүд хянан магадлагаа хийгддэг олон улсын эрдэм шинжилгээний сэтгүүлүүдэд хэвлэгдсэн. Үүнд:`}
    //     </p>
    //     <p className="whitespace-pre-wrap">{`•	Дархлааг зохицуулан идэвжүүлэх, хэвийн зохистой төвшинд хадгалах:\n•	Халдвараас сэргийлэх, эмчилгээний үр дүнг дэмжих:\n•	Хавдарын үеийн хосолмол эмчилгээний үр дүн:\n•	Өндөр эрсдэлт-хүний папилома вирус (HR-Папилома вирус (HPV))-ын халдварын эмчилгээ гэх мэт.`}</p>
    //     <p>
    //       Бусад эмгэгийн үеийн хэрэглээний үр дүнгийн дэлгэрэнгүй мэдээллийг
    //       доорх сайтнаас үзнэ үү. (
    //       <a
    //         target="_blank"
    //         className="text-blue-500"
    //         href="https://pubmed.ncbi.nlm.nih.gov"
    //       >
    //         https://pubmed.ncbi.nlm.nih.gov
    //       </a>
    //       ,
    //       <a
    //         target="_blank"
    //         className="text-blue-500"
    //         href="https://aminoup.info/en/ahcc/thesis"
    //       >
    //         https://aminoup.info/en/ahcc/thesis
    //       </a>
    //       )
    //     </p>
    //   </div>

    //   <div>
    //     <h1 className="text-xl font-bold">
    //       ЦААШДЫН СУДАЛГАА, ХӨГЖЛИЙН ЗОРИЛТ:
    //     </h1>
    //     <p>
    //       AHCC® бэлдмэлийн дархлааг зохицуулан идэвхжүүлэх үйлдэл нь олон
    //       судалгаа, эмнэлзүйн туршилтуудаар нотлогдон анагаах ухааны хэд хэдэн
    //       салбарын хосолсон эмчилгээний практикт өргөн нэвтэрсэн. Одоо тус
    //       бэлдмэлийн эмнэлзүйн II болон III дугаар шатны туршилтууд, ялангуяа
    //       хэд хэдэн төрлийн хавдар болон хүний умайн хүзүүний хавдарын гол
    //       нөхцөлдүүлэгч папилома вирусийн эсрэг үйлдлийг нарийвчлан
    //       баталгаажуулах чиглэлээр АНУ, Япон зэрэг орнуудад эрчимтэй хийгдэж
    //       байна.(
    //       <a
    //         target="_blank"
    //         className="text-blue-500"
    //         href="https://pubmed.ncbi.nlm.nih.gov/35814366/"
    //       >
    //         https://pubmed.ncbi.nlm.nih.gov/35814366/
    //       </a>
    //       ,
    //       <a
    //         target="_blank"
    //         className="text-blue-500"
    //         href="https://pubmed.ncbi.nlm.nih.gov/35075934/"
    //       >
    //         https://pubmed.ncbi.nlm.nih.gov/35075934/
    //       </a>
    //       )
    //     </p>
    //   </div>

    //   <p>
    //     AHCC® бэлдмэл судлалын холбоо (AHCC Research Association) 1994 онд
    //     байгуулагдаж, 2015 оноос “Эмчилгээ сувилалын хоололт-хосолмол эмчилгээн”
    //     Олон улсын конгресс (International congress on Nutrition and Integrative
    //     Medicine) гэж нэрлэгдсэн ба жил бүр Олон улсын эрдэм шинжилгээний хурал
    //     зохион байгуулж 30 гаруй орны судлаачид судалгааны ажлын үр дүнгээ
    //     танилцуулан хэлэлцдэг. Тус хурлын эрдэм шинжилгээний илтгэлийн
    //     хураангуйтай доорх холбоосоор орж танилцана уу. (
    //     <a
    //       target="_blank"
    //       className="text-blue-500"
    //       href="https://icnim.org/icnim/past-conferences.php?l=eng"
    //     >
    //       https://icnim.org/icnim/past-conferences.php?l=eng
    //     </a>
    //     )
    //   </p>
    //   <p>
    //     Тус холбооноос AHCC® бэлдмэлийн дархлаа зохицуулан идэвхжүүлэх
    //     үйлдэлийг харуулсан судалгаа, эмнэлзүйн туршилтын дүнд тулгуурлан
    //     “AHCC® хэрэглээ-эмчийн гарын авлага” (The Clinician’s Guide to AHCC)
    //     номыг хэвлэн олны хүртээл болгосон ба доорх холбоосоор орж бүрэн эхээр
    //     нь танилцана уу.
    //   </p>
    //   <div className="flex justify-center">
    //     <Image
    //       alt="image"
    //       src={"/assets/about/book.jpg"}
    //       width={300}
    //       height={300}
    //     />
    //   </div>
    // </div>
  );
};

export default Research;
