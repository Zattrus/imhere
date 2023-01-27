import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
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
        if (participants.includes("Thiago")) {
            return Alert.alert("Participante existe", "Ja existe particpante com esse nome!")
        }
    }

    function handleParticipantDelete(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`,
            [
                {
                    text: 'Sim',
                    onPress: () => Alert.alert('Deletado!')
                },

                {
                    text: 'Não',
                    style: 'cancel'
                }
            ]
        )
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
                        onRemove={() => handleParticipantDelete(item)} />
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