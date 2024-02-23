import {
  CardBody,
  GridItem,
  Heading,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Card from "./Card";

export function Content() {
  return (
    <GridItem>
      <Heading size="md" pb={4}>
        🎧 You Heard It Here Second
      </Heading>

      <Text fontSize="small" pb={4} pl={2}>
        A "bullet point blog" of things that stood out to me from books,
        podcasts, etc.
      </Text>

      <SimpleGrid spacing={4}>
        <Card heading="A Philosophy of Software Design">
          <CardBody>
            Symptoms of complexity:
            <UnorderedList>
              <ListItem>
                Change Amplification: seemingly simple change requires code
                modifications in many different places.
              </ListItem>
              <ListItem>
                Cognitive Load: how much a developer needs to know in order to
                complete a task. A higher cognitive load means that developers
                have to spend more time learning the required information, and
                there is a greater risk of bugs because they have missed
                something important. Sometimes an approach that requires more
                lines of code is actually simpler, because it reduces cognitive
                load.
              </ListItem>
              <ListItem>
                Unknown Unknowns: An unknown unknown means that there is
                something you need to know, but there is no way for you to find
                out what it is, or even whether there is an issue. One of the
                most important goals of good design is for a system to be
                obvious. An obvious system is one where a developer can make a
                quick guess about what to do, without thinking very hard, and
                yet be confident that the guess is correct.
              </ListItem>
            </UnorderedList>
          </CardBody>
        </Card>

        <Card heading="Managing Complexity in Software">
          <CardBody>
            Listen to or read the talk{" "}
            <Link
              href="https://gotopia.tech/articles/174/expert-talk-managing-complexity-in-software"
              isExternal
            >
              here
            </Link>
            .
            <UnorderedList>
              <ListItem>
                <Link
                  href="https://www.nutshell.com/blog/accidental-complexity-software-design"
                  isExternal
                >
                  Accidental vs. essential complexity
                </Link>
              </ListItem>
              <ListItem>
                "Any organization that designs a system will produce a design
                whose structure is a copy of the organization's communication
                structure."
              </ListItem>
              <ListItem>
                "Nobody ever sets out to over-engineer things. Nobody has the
                meeting and says, 'So we're going to develop this. Any
                suggestions for how we should do it?' 'I think we should
                over-engineer it beyond comprehension, but we should do it under
                the veil, and mandate of simplicity.'" 😂
              </ListItem>
              <ListItem>
                On the cyclical nature of software development. For example, the
                pendulum swing between server vs. client side rendering or
                between monoliths vs microservices might have us thinking
                something is new when we're actually just repeating the past:
              </ListItem>
              <ListItem ml={4}>
                "We always repeat certain mistakes and certainly as an
                individual in the profession, you have to go through certain
                mistakes that you're going to make. Nobody can think for
                you...But it does seem collectively we are capable of making
                some of the same mistakes. It's kind of like, 'Shouldn't we mark
                that one as done so we can make new and exciting mistakes that
                actually push us into different spaces rather than hovering in
                the same areas?'"
              </ListItem>
            </UnorderedList>
          </CardBody>
        </Card>

        <Card heading="Simplicity & Complexity: The Beauty & the Beast?">
          <CardBody>
            Listen to or read the talk{" "}
            <Link
              href="https://gotopia.tech/articles/205/simplicity-and-complexity-the-beauty-and-the-beast"
              isExternal
            >
              here
            </Link>
            .
            <UnorderedList>
              <ListItem>
                “Developers are drawn to complexity like moths to a flame and
                often with the same result.” <strong>ouch</strong>
              </ListItem>
              <ListItem>On subtraction instead of addition:</ListItem>
              <ListItem ml={4}>
                Why do we make things more complex? One theme is “the additive
                nature of how we try and solve things…it&apos;s always by
                addition, it&apos;s very rarely by removal.”
              </ListItem>
              <ListItem ml={4}>
                On personal learning. “There may be jumps in your improvement of
                skill, but often if you look closely, there is a dip before
                that. What happens is that true learning doesn&apos;t come about
                purely by addition of knowledge. It comes about by reformation
                of knowledge. It comes about by unlearning and rewiring and
                throwing stuff out.”
              </ListItem>
              <ListItem ml={4}>
                “If we want to get simplicity, then we are gonna have to get
                better at the recognition that this is a learning exercise, and
                that means throwing stuff away.”
              </ListItem>
              <ListItem>
                “Software development is a process of inquiry. It&apos;s not a
                process of production.” We don&apos;t know everything upfront.
                We need to ask questions and let stuff emerge. This can make it
                hard to estimate work. And it can be hard to communicate why
                it&apos;s hard to estimate because everyone is operating from
                different mental models. He talked about the{" "}
                <Link
                  href="https://thecynefin.co/about-us/about-cynefin-framework/"
                  isExternal
                >
                  Cynefin Framework
                </Link>{" "}
                as a way to get on the same page. Reminded me a little of{" "}
                <Link
                  href="https://basecamp.com/shapeup/3.4-chapter-13#work-is-like-a-hill"
                  isExternal
                >
                  Shape Up&apos;s Hill Charts
                </Link>
                .
              </ListItem>
            </UnorderedList>
          </CardBody>
        </Card>
      </SimpleGrid>
    </GridItem>
  );
}
