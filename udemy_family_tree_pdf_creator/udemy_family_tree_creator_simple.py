"""
Prompt: Create a class called Person which will have a name, when they were born and when (and if) they died.Allow the
user to create these Person classes and put them into a family tree structure. Print out the tree to the screen.
"""

# for FPDF (docs): https://pyfpdf.readthedocs.io/en/latest/reference/cell/index.html

"""
# infrastructure (simplest)

1. What already exists here (setup 1 generation above and below, 
        print PDF and do again if desired)


# infrastructure (condensed)

1. Setup wizard:
    1.1 root person setup (establish understanding that they cannot change this person later)
    1.2 root person parents
    1.3 root person's parent's parents (etc.)
    1.4 root person's children
    1.5 root person's children's children (etc.)
2. Can change root person
3. Add and Delete for people and relationships
    2.1 add person (afterward prompt add relationship)
    2.2 add relationship
    2.3 delete relationship
    2.4 delete person
4. Print tree
5. Offer option to physically print results when finished (PDF)


# infrastructure (full)

1. *We had this one as our starting point and from it we made the above condensed version. 
2. Added infrastructure:
    2.1 landing page upon start with option to select trees previously constructed
3. Added functions:
    3.1 create tree
    3.2 select tree
    3.3 delete tree
    3.4 save tree (after selecting tree)
    3.5 print people
    3.6 selectable categories: [siblings, aunts&uncles, nieces&nephews, cousins, grandparents, children, grandchildren,
            great_grandparents, [second_cousins], [third_cousins], [same_generation] ]
        3.6.1 [same_generation] would be the sum of every group that would be
                in the same generation as the root (gen [0]) by category (including spouce)
4. Improved print wizard capable of selecting all above options
"""


class Person:

    def __init__(self, data, birth_date='', death_date='none'):
        self.data = data
        self.birth_date = birth_date
        self.death_date = death_date
        self.root = False
        self.children = []
        self.parent = []

    def add_child(self, child):
        child.parent.append(self)
        self.children.append(child)

    def add_parent(self, parent):
        self.parent.append(parent)
        parent.children.append(self)

    def get_level_ancestors(self):
        level = 0
        c = self.children
        while c:
            level += 1
            c = c[0].children
        return level

    def get_level_descendants(self):
        level = 0
        p = self.parent
        while p:
            level += 1
            p = p[0].parent
        return level

    def print_family_ancestors(self):
        space = ' ' * self.get_level_ancestors() * 3
        prefix = '\t' + space + '|__ ' if not self.root else '\t'

        print(prefix + self.data + '    (birth: ' + self.birth_date + ', death: ' + self.death_date + ')')
        for parent in self.parent:
            parent.print_family_ancestors()

    def print_family_descendants(self):
        space = ' ' * self.get_level_descendants() * 3
        prefix = '\t' + space + '|__ ' if not self.root else '\t'

        print(prefix + self.data + '     (birth: ' + self.birth_date + ', death: ' + self.death_date + ')')
        for child in self.children:
            child.print_family_descendants()

    def text_family_ancestors(self):
        space = ' ' * self.get_level_ancestors() * 5
        prefix = '\t' + space + '|__ ' if not self.root else '\t'
        text1 = prefix + self.data + '    (birth: ' + self.birth_date + ', death: ' + self.death_date + ')'
        return text1

    def text_family_descendants(self):
        space = ' ' * self.get_level_descendants() * 5
        prefix = '\t' + space + '|__ ' if not self.root else '\t'
        text2 = prefix + self.data + '     (birth: ' + self.birth_date + ', death: ' + self.death_date + ')'
        return text2

    def gen_text_for_pdf(self, pdf):
        align = 'L'  # L, C, or R
        ln = 1

        txt = 'Ancestors:'
        pdf.cell(200, 10, txt=txt, ln=ln, align=align)
        ln += 1

        txt_self = ' ' * 8 + self.data
        pdf.cell(200, 10, txt=txt_self, ln=ln, align=align)
        ln += 1

        for parent in self.parent:
            txt = ' ' * 5 + parent.text_family_ancestors()
            pdf.cell(200, 10, txt=txt, ln=ln, align=align)
            ln += 1

        ln += 1

        txt = 'Descendants:'
        pdf.cell(200, 10, txt=txt, ln=ln, align=align)
        ln += 1

        pdf.cell(200, 10, txt=txt_self, ln=ln, align=align)
        ln += 1

        for child in self.children:
            txt = ' ' * 5 + child.text_family_descendants()
            pdf.cell(200, 10, txt=txt, ln=ln, align=align)
        ln += 1

    def physical_print(self):
        # setup PDF tools
        from fpdf import FPDF
        pdf = FPDF()
        pdf.add_page()
        pdf.set_font("Arial", size=12)

        # creating PDF content: cell creation
        self.gen_text_for_pdf(pdf)

        # saving the pdf
        path = input("Please enter the file location you would like to save this file to:\n")
        file_name = input("File name (no file extension needed): ")
        pdf.output(path + "\\" + file_name + ".pdf")

        print("PDF created successfully.")


def print_both_trees(root_person):
    print('\nAncestors:')
    root_person.print_family_ancestors()
    print('\nDescendants:')
    root_person.print_family_descendants()


def query_create_person():
    name = input("What is this person's full name? ")
    birth = input(f"What is this person's birth date? ")
    death = input(f"What is this person's death date? "
                  "(If they are still alive simply press Enter) ")
    person = Person(name, birth, death)
    return person


def setup_wizard():
    # create root person
    print("Let's start by creating your root person.\n"
          "Please note that you will not be able to change the root person later.\n")
    root_person = query_create_person()
    root_person.root = True
    # add parents (only 1 level for now)
    n = 0
    p = 0
    while True:
        print('\nAncestors:')
        root_person.print_family_ancestors()
        print('')
        if n == 0:
            a_nother = 'a'
        else:
            a_nother = 'another'
        while True:
            ans = input(f"Would you like to add {a_nother} parent for this person? (y/n) ")
            if ans == 'y':
                parent_person = query_create_person()
                root_person.add_parent(parent_person)
                break
            elif ans == 'n':
                break
            else:
                print("\tSorry, that wasn't an option.")
        if ans == 'n' or p == 1:
            break
        n += 1
        p += 1
    # add children (only 1 level for now)
    n = 0
    while True:
        print_both_trees(root_person)
        if n == 0:
            a_nother = 'a'
        else:
            a_nother = 'another'
        while True:
            ans = input(f"\nWould you like to add {a_nother} child for this person? (y/n) ")
            if ans == 'y':
                child_person = query_create_person()
                root_person.add_child(child_person)
                break
            elif ans == 'n':
                break
            else:
                print("\tSorry, that wasn't an option.")
        if ans == 'n':
            break
        n += 1
    return root_person


def family_tree_creator_app():
    running = True
    while running:
        print("Welcome to the family tree creator! (coded by Collyn Christopher Brenner)")

        root_person = setup_wizard()

        print_both_trees(root_person)

        while True:
            ans = input("\nWould you like to print this tree to a PDF? (y/n) ")
            if ans == 'y':
                root_person.physical_print()
                break
            elif ans == 'n':
                break
            else:
                print("\tSorry, that wasn't an option.")

        while True:
            ans = input("\nWould you like to create another family tree? (y/n) ")
            if ans == 'y':
                print('')
                break
            elif ans == 'n':
                running = False
                break
            else:
                print("\tSorry, that wasn't an option.")

    print("\nThank you for using Family Tree Creator\n\t(coded by Collyn Christopher Brenner).")

    # print(root_person.gen_text_for_pdf())
    # root_person.physical_print()

    return ''


family_tree_creator_app()

# set default file location to os.getcwd()
# nah, instead do some kind of file explorer search if possible

"""
def construct_family_ancestors():
    root = Person('Collyn')

    michelle = Person("Michelle")
    craig = Person("Craig")

    michelle.add_parent(Person('Pat'))
    michelle.add_parent(Person('John'))

    craig.add_parent(Person('Sylvia'))
    craig.add_parent(Person("Wilbur"))

    root.add_parent(michelle)
    root.add_parent(craig)

    return root


def construct_family_descendants():
    root = Person('Collyn')

    terry = Person("Terry", '3/12/2025')
    chuck = Person("Chuck")

    terry.add_child(Person('Linda'))
    terry.add_child(Person('Hermione'))

    chuck.add_child(Person('Turk'))
    chuck.add_child(Person("Fran"))

    root.add_child(terry)
    root.add_child(chuck)

    return root

collyn = construct_family_ancestors()
collyn2 = construct_family_descendants()
print('')
collyn.print_family_ancestors()
print('')
collyn2.print_family_descendants()
"""
