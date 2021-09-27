import React from "react";
import Accordion from "../components/accordion/accordion";
import fagsData from "../fixtures/fags";

export function FagsContainer() {
    return  (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {fagsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}