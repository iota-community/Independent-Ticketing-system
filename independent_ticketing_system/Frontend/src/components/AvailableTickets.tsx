import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useNetworkVariable } from "../networkConfig";
import { getFullnodeUrl, IotaClient } from "@iota/iota-sdk/client";
import { useCreateForm } from "../hooks/useCreateForm";

export default function AvailableTickets() {
  const [tickets, setTickets] = useState<null | any[]>(null);
  const eventOjbect = useNetworkVariable(
    "eventObject" as never
  );
  const packageId = useNetworkVariable("packageId" as never);
  const client = new IotaClient({
    url: getFullnodeUrl("testnet"),
  });
  const { address } = useCreateForm();
  useEffect(() => {
    const body = {
      jsonrpc: "2.0",
      id: 1,
      method: "iota_getObject",
      params: [eventOjbect, { showContent: true }],
    };
    fetch("https://indexer.testnet.iota.cafe/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        setTickets(res.data.result.data.content.fields.nfts);
      });
    client
      .getOwnedObjects({
        owner: address.address || "",
        filter: {
          StructType: `${packageId}::independent_ticketing_system_nft::InitiateResale`,
        },
        options: {
          showContent: true,
        },
      })
      .then((res) => res.data)
      .then((res) =>
        setTickets((prevTickets) =>
          prevTickets ? [...prevTickets, ...res] : [...res],
        ),
      );
  }, []);
  return (
    <Flex mt={"5"} justify={"center"}>
      {tickets && tickets.length > 0 ? (
        tickets.map((ticket, index) => (
          <Box width="500px" key={index}>
            <Card size="3" style={{ background: "#1e1e1e" }}>
              <Flex direction={"column"}>
                <Text size={"5"}>{ticket.name}</Text>
                <Text size={"3"}>{ticket.seat_number}</Text>
                <Text size={"2"}>{ticket.owner}</Text>
                <Text size={"2"}>{ticket.event_id}</Text>
                <Text size={"2"}>{ticket.event_date}</Text>
                <Text size={"2"}>{ticket.price}</Text>
              </Flex>
            </Card>
          </Box>
        ))
      ) : (
        <Flex justify={"center"} mt={"5"}>
          <Heading align={"center"}>No Tickets Available Now!</Heading>
        </Flex>
      )}
    </Flex>
  );
}
