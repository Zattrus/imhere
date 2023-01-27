import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from './styles'

import { Participant } from "../../components/Participant";

export function Home() {
    const participants = [
        'Thiago',
        'Jonathan',
        'Eliane',
        'Fabio',
        'Gamora',
        'Yuumi',
        'Nina',
        'Ana',
        'Isa',
        'Jack',
        'Rodrigo',
        'Diego',
    ];

    function handleParticipantAdd() {
        console.log("Você cliclou no botão de add")
    }

    function handleParticipantDelete() {
        console.log("Você cliclou no botão de delete")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Quarta, 25 de Janeiro de 2023.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor={'#6B6B6B'}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantDelete} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />
        </View>
    )
}